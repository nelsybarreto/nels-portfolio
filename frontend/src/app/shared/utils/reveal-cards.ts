import { ElementRef, QueryList } from '@angular/core';
import { inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';


export type RevealCardsOptions = {
  // id de la sección (por ejemplo "projects", "skills", "about")
  sectionId: string;

  // clases que usás en CSS
  startClass?: string; // default: 'reveal-start'
  inClass?: string;    // default: 'reveal-in'

  // observer tuning
  threshold?: number;      // default: 0.25
  rootMargin?: string;     // default: '0px 0px -15% 0px'

  // replay behavior
  replayOnEnter?: boolean; // default: true
  resetOnExit?: boolean;   // default: false (si true, replay cada vez)
  replayDelayMs?: number;  // default: 120

  // stagger: al usar CSS con --i en template, no hay que realizar cambios aquí

  
};


export type RevealCardsController = {
  init: () => void;
  destroy: () => void;
  replay: () => void;
  reset: () => void;
};

export function useRevealCards(
  sectionRef: ElementRef<HTMLElement>,
  cardRefs: QueryList<ElementRef<HTMLElement>>,
  opts: RevealCardsOptions
): RevealCardsController {
  const options: Required<RevealCardsOptions> = {
    sectionId: opts.sectionId,
    startClass: opts.startClass ?? 'reveal-start',
    inClass: opts.inClass ?? 'reveal-in',
    threshold: opts.threshold ?? 0.25,
    rootMargin: opts.rootMargin ?? '0px 0px -15% 0px',
    replayOnEnter: opts.replayOnEnter ?? true,
    resetOnExit: opts.resetOnExit ?? false,
    replayDelayMs: opts.replayDelayMs ?? 120,
  };

  let io: IntersectionObserver | undefined;
  let inView = false;
  const cleanupFns: Array<() => void> = [];

  const reduceMotion =
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;

  const getEls = () => cardRefs?.toArray().map((r) => r.nativeElement) ?? [];

  const reset = () => {
    const els = getEls();
    els.forEach((el) => {
      el.classList.remove(options.inClass);
      el.classList.remove(options.startClass);
    });
  };

  const replay = () => {
    if (reduceMotion) return;

    const els = getEls();
    if (!els.length) return;

    // reset
    els.forEach((el) => {
      el.classList.remove(options.inClass);
      el.classList.remove(options.startClass);
    });

    // start state
    els.forEach((el) => el.classList.add(options.startClass));

    // reflow (reinicia transiciones/animaciones)
    void sectionRef.nativeElement.offsetHeight;

    // play
    els.forEach((el) => {
      el.classList.remove(options.startClass);
      el.classList.add(options.inClass);
    });
  };

  const replaySoon = () => {
    requestAnimationFrame(() => {
      setTimeout(() => replay(), options.replayDelayMs);
    });
  };

  const init = () => {
    if (reduceMotion) return;

    // 1) IntersectionObserver: entra a viewport
    io = new IntersectionObserver(
      ([entry]) => {
        const now = !!entry?.isIntersecting;
        if (now === inView) return;
        inView = now;

        if (now && options.replayOnEnter) replay();
        if (!now && options.resetOnExit) reset();
      },
      { threshold: options.threshold, rootMargin: options.rootMargin }
    );

    requestAnimationFrame(() => {
      io?.observe(sectionRef.nativeElement);
    });

    // 2) Replay por hashchange (si existe)
    const onHashChange = () => {
      if (window.location.hash === `#${options.sectionId}`) replaySoon();
    };
    window.addEventListener('hashchange', onHashChange);
    cleanupFns.push(() => window.removeEventListener('hashchange', onHashChange));

    // 3) Replay por click en <a href="#sectionId"> aunque no cambie el hash
    const onDocClick = (ev: MouseEvent) => {
      const target = ev.target as HTMLElement | null;
      const a = target?.closest?.(`a[href="#${options.sectionId}"]`) as HTMLAnchorElement | null;
      if (!a) return;
      replaySoon();
    };
    document.addEventListener('click', onDocClick, true);
    cleanupFns.push(() => document.removeEventListener('click', onDocClick, true));

    // 4) Si se entra directo con /#sectionId
    if (window.location.hash === `#${options.sectionId}`) replaySoon();

    // 5) Si cambian los cards dinámicamente (ngFor), re-obtenemos y (opcional) re-play
    const sub = cardRefs.changes.subscribe(() => {
      // No reseteamos por defecto, pero podés re-play si querés:
      // replay();
    });
    cleanupFns.push(() => sub.unsubscribe());
  };

  const destroy = () => {
    io?.disconnect();
    cleanupFns.forEach((fn) => fn());
    cleanupFns.length = 0;
  };

  return { init, destroy, replay, reset };
}
