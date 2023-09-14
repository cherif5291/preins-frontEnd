import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:8081/api';

  constructor(private http: HttpClient, private authService: AuthService) {}

  getFilieres() {
    const token = this.authService.getAuthToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get(`${this.apiUrl}/filiere`, { headers });
  }

  getClassesByFilieres(id: number) {
    const token = this.authService.getAuthToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get(`${this.apiUrl}/getClasseByFiliere/${id}`, { headers });
  }
  
}
