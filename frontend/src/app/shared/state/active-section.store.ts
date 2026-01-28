import { Injectable, signal } from '@angular/core';

export type SectionId = 'home' | 'about' | 'projects' | 'services' | 'contact';

@Injectable({ providedIn: 'root' })
export class ActiveSectionStore {
  readonly active = signal<SectionId>('home');

  setActive(id: SectionId) {
    this.active.set(id);
  }
}
