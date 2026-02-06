import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { SERVICES } from './services.data';
import { RevealCardsDirective } from '../../../../shared/directives/reveal-cards.directive';
import { IconComponent } from '@/app/shared/ui/icon/icon.component';
import { ServiceItem } from '@/app/models/service-item.model';
import { PortfolioApiService } from '@/app/services/portfolio-api.service';
import { LoadState } from '@/app/models/load-state.model';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [RevealCardsDirective, IconComponent],
  templateUrl: './services-section.html',
  styleUrl: './services-section.css',
})
export class ServicesSection implements OnInit {

  constructor(private api: PortfolioApiService) {
    this.load();
  }
  state = signal<LoadState<ServiceItem[]>>({ status: 'idle' });
  services = signal<ServiceItem[]>([]);
  private destroyRef = inject(DestroyRef);

  
  ngOnInit(): void {
    this.api.getServices()
    .pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe({
      next: (data) => {
        this.services.set(data);
      },
      error: (err) => console.error('Error loading services', err)
    });
  }
  
  load() {
    this.state.set({ status: 'loading' });

    this.api.getServices()
    .pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe({ 
        next: (data) => {
          console.log('Services loaded:', data);
          this.state.set({ status: 'success', data })
        },
        error: (err) => {
          const message =
            err?.error?.message ||
            err?.message ||
            'No se pudo cargar la información. Intentá nuevamente.';
            console.log('Error loading services:', err);
          this.state.set({ status: 'error', message });
        }
      });
  }

  reload() {
    this.load();
  }

  ngOnDestroy(): void {
    // Cleanup if necessary
  }
}
