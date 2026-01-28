import { Component } from '@angular/core';
import { SERVICES } from './services.data';
import { RevealCardsDirective } from '../../../../shared/directives/reveal-cards.directive';
import { IconComponent } from '@/app/shared/ui/icon/icon.component';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [RevealCardsDirective, IconComponent],
  templateUrl: './services-section.html',
  styleUrl: './services-section.css',
})
export class ServicesSection {
  services = SERVICES;
}
