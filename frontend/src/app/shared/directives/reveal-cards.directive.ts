import {
    Directive,
    ElementRef,
    Input,
    OnDestroy,
    AfterViewInit,
    inject,
    signal
  } from '@angular/core';

import { ActiveSectionStore, SectionId } from '../state/active-section.store';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
  
  @Directive({
    selector: '[appRevealCards]',
    standalone: true,
  })
  export class RevealCardsDirective implements AfterViewInit, OnDestroy {
    private host = inject(ElementRef<HTMLElement>);
    private activeSection = inject(ActiveSectionStore);
  
    /** id de la sección (debe coincidir con el id del <section>) */
    @Input({ required: true }) revealSectionId!: SectionId;
  
    /** selector CSS de los “cards/items” dentro de la sección */
    @Input() revealSelector = '.card';
  
    /** clases */
    @Input() startClass = 'reveal-start';
    @Input() inClass = 'reveal-in';
  
    /** observer tuning */
    @Input() threshold = 0.22;
    @Input() rootMargin = '0px 0px -35% 0px';
  
    /** comportamiento */
    @Input() replayOnEnter = true;
    @Input() resetOnExit = false;
    @Input() replayDelayMs = 80;
  
    private io?: IntersectionObserver;
    private cleanupFns: Array<() => void> = [];
  
    private inView = signal(false);

    private platformId = inject(PLATFORM_ID);
  
    private get reduceMotion(): boolean {
      return typeof window !== 'undefined'
        && !!window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
    }
  
    private getCards(): HTMLElement[] {
        const root = this.host.nativeElement;
        const nodes = root.querySelectorAll(this.revealSelector);
        return Array.from(nodes) as HTMLElement[];
    }
  
    private setStartState() {
      const cards = this.getCards();
      cards.forEach((el) => {
        el.classList.remove(this.inClass);
        el.classList.add(this.startClass);
      });
    }
  
    private reset() {
      const cards = this.getCards();
      cards.forEach((el) => {
        el.classList.remove(this.inClass);
        el.classList.remove(this.startClass);
      });
    }
  
    private replay() {
      if (this.reduceMotion) return;
  
      const cards = this.getCards();
      if (!cards.length) return;
  
      // reset
      cards.forEach((el) => {
        el.classList.remove(this.inClass);
        el.classList.remove(this.startClass);
      });
  
      // start
      cards.forEach((el) => el.classList.add(this.startClass));
  
      // reflow
      void this.host.nativeElement.offsetHeight;
  
      // play
      cards.forEach((el) => {
        el.classList.remove(this.startClass);
        el.classList.add(this.inClass);
      });
    }
  
    private replaySoon() {
      requestAnimationFrame(() => {
        setTimeout(() => this.replay(), this.replayDelayMs);
      });
    }
  
    ngAfterViewInit(): void {
      if (!isPlatformBrowser(this.platformId)) {
        return;
      }
    
      if (!('IntersectionObserver' in window)) {
        return;
      }
      
      // estado inicial para que no “aparezcan” sin animación
      if (!this.reduceMotion) this.setStartState();
  
      // 1) IntersectionObserver para sección (reveal + active section)
      if (!this.reduceMotion) {
        this.io = new IntersectionObserver(
          ([entry]) => {
            const now = !!entry?.isIntersecting;
            if (now === this.inView()) return;
            this.inView.set(now);
  
            if (now) {
              this.activeSection.setActive(this.revealSectionId);
              if (this.replayOnEnter) this.replay();
            } else if (this.resetOnExit) {
              this.reset();
              // opcional: volver a start state si querés replay siempre que entra
              this.setStartState();
            }
          },
          { threshold: this.threshold, rootMargin: this.rootMargin }
        );
  
        requestAnimationFrame(() => this.io?.observe(this.host.nativeElement));
      }
  
      // 2) replay por hashchange (si navegan con #about)
      const onHashChange = () => {
        if (window.location.hash === `#${this.revealSectionId}`) this.replaySoon();
      };
      window.addEventListener('hashchange', onHashChange);
      this.cleanupFns.push(() => window.removeEventListener('hashchange', onHashChange));
  
      // 3) replay por click en link aunque no cambie hash
      const onDocClick = (ev: MouseEvent) => {
        const target = ev.target as HTMLElement | null;
        const a = target?.closest?.(`a[href="#${this.revealSectionId}"]`) as HTMLAnchorElement | null;
        if (!a) return;
        this.replaySoon();
      };
      document.addEventListener('click', onDocClick, true);
      this.cleanupFns.push(() => document.removeEventListener('click', onDocClick, true));
  
      // 4) entrada directa con hash
      if (window.location.hash === `#${this.revealSectionId}`) this.replaySoon();
    }
  
    ngOnDestroy(): void {
      this.io?.disconnect();
      this.cleanupFns.forEach((fn) => fn());
      this.cleanupFns.length = 0;
    }
  }
  