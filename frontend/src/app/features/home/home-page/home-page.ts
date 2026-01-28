import { Component } from '@angular/core';
import { Navbar } from '../../../core/layout/navbar/navbar';
import { Footer } from '../../../core/layout/footer/footer';
import { HeroSection } from '../sections/hero-section/hero-section';
import { ServicesSection } from '../sections/services-section/services-section';
import { ProjectsSection } from '../sections/projects-section/projects-section';
import { AboutSection } from '../sections/about-section/about-section';
import { ContactSection } from '../sections/contact-section/contact-section';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    Navbar,
    Footer,
    HeroSection,
    ServicesSection,
    ProjectsSection,
    AboutSection,
    ContactSection,
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {}
