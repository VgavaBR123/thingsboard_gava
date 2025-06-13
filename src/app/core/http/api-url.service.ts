import { Injectable } from '@angular/core';
import { environment as env } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiUrlService {
  
  private readonly apiBaseUrl: string;

  constructor() {
    this.apiBaseUrl = env.tbApiBaseUrl;
  }

  public getApiBaseUrl(): string {
    return this.apiBaseUrl;
  }

  public getApiUrl(path: string): string {
    return `${this.apiBaseUrl}${path}`;
  }
} 