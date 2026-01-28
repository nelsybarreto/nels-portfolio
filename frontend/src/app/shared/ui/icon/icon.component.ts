import { Component, Input } from '@angular/core';

export type IconName = 'experience' | 
  'stack' | 
  'quality' | 
  'tools' | 
  'fullstack' | 
  'architecture' | 
  'maintenance' | 
  'collaboration' |
  'github' |
  'linkedin' |
  'email';

@Component({
  selector: 'app-icon',
  standalone: true,
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.css',
})
export class IconComponent {
  @Input({ required: true }) name!: IconName;
}
