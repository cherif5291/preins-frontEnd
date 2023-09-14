import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-chefdef-dashboard',
  templateUrl: './chefdef-dashboard.component.html',
  styleUrls: ['./chefdef-dashboard.component.css']
})
export class ChefdefDashboardComponent {
  constructor(private http: HttpClient, private authService: AuthService, private router: Router) {}

  logoutUser() {
    const token = this.authService.getAuthToken(); // Utilisez le service pour obtenir le token
    const headers = {
      Authorization: `Bearer ${token}`
    };
  
    this.http.post('http://127.0.0.1:8081/api/logout', null, { headers }).subscribe(
      response => {
        console.log('Déconnexion réussie :', response);
        // Réinitialisez le local storage et redirigez l'utilisateur vers la page de connexion.
        this.authService.clearAuthToken(); // Utilisez le service pour effacer le token
        window.location.href = '/login'; // Redirection vers la page de connexion
        this.router.navigate(['/login']);
      },
      error => {
        console.error('Erreur lors de la déconnexion :', error);
      }
    );
  }
}
