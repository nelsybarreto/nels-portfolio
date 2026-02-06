import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceItem } from '../models/service-item.model';
import { Project } from '../models/project.model';

@Injectable({ providedIn: 'root' })
export class PortfolioApiService {
  constructor(private http: HttpClient) {}

  getServices(): Observable<ServiceItem[]> {
    return this.http.get<ServiceItem[]>('/api/services');
  }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>('/api/projects');
  }
}
