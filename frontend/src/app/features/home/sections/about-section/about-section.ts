import { Component } from '@angular/core';
import { RevealCardsDirective } from '../../../../shared/directives/reveal-cards.directive';
import { ABOUT_CARDS } from './about-cards.data';
import { AboutCard } from './about.model';
import { CommonModule } from '@angular/common';
import { IconComponent } from '@/app/shared/ui/icon/icon.component';


@Component({
  selector: 'app-about-section',
  imports: [RevealCardsDirective, CommonModule, IconComponent],
  templateUrl: './about-section.html',
  styleUrl: './about-section.css',
})
export class AboutSection {
  cards: AboutCard[] = ABOUT_CARDS;

}
