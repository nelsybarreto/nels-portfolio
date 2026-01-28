import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  //imports: [NgFor],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  brand = { left: 'nels', right: '.dev' };

  links = [
    { label: 'About', href: '#sobre-mi' },
    { label: 'Projects', href: '#proyectos' },
    { label: 'Services', href: '#servicios' },
    { label: 'Contact', href: '#contacto' },
  ];

  cta = { label: 'Contactarme', href: '#contacto' };
}
