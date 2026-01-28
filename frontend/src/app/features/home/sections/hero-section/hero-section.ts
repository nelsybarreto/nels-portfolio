import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  //imports: [NgFor],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
})
export class HeroSection {
  eyebrow = 'SENIOR FULL STACK ENGINEER';
  titleLine1 = 'Full Stack Developer';
  titleLine2 = 'especializado en .NET y Angular';
  subtitle = 'Desarrollo aplicaciones web escalables, mantenibles y orientadas a negocio.';

  chips = ['.NET 8', 'Angular', 'SQL', 'APIs', 'Azure', 'Clean Architecture'];

  primary = { label: 'Contactarme', href: '#contacto' };
  secondary = { label: 'Ver Proyectos', href: '#proyectos' };

  availability = 'Disponible para full-time / freelance remoto.';

  // Reemplaza por tu avatar (híbrido foto+ilustración)
  avatarSrc = 'assets/avatar.png';
}
