import { Component } from '@angular/core';
import { PROJECTS } from './projects.data';
import { Project } from './projects.model';
import { RevealCardsDirective } from '@/app/shared/directives/reveal-cards.directive';
import { IconComponent } from '../../../../shared/ui/icon/icon.component';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [RevealCardsDirective],
  templateUrl: './projects-section.html',
  styleUrls: ['./projects-section.css'],
})
export class ProjectsSection {
  projects: Project[] = PROJECTS;
}
