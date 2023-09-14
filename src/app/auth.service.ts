import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authTokenKey = 'authToken';

  constructor(private router:Router) {}

  setAuthToken(token: string) {
    localStorage.setItem(this.authTokenKey, token);
  }

  getAuthToken(): string | null {
    return localStorage.getItem(this.authTokenKey);
  }

  clearAuthToken() {
    localStorage.removeItem(this.authTokenKey);
  }
  
  dashboardSecretaire(){
    this.router.navigate(['/secretaireDashboard']);
  }
  dashboardPostulant(){
    this.router.navigate(['/postulantDashboard']);
  }


}
