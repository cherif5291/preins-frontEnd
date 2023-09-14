import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  ngOnInit(): void {
      this.getUser();
      this.logoutUser();
  }
  
  Users:any=[];
  constructor(private http: HttpClient, private router: Router, private authService:AuthService,private auth:AuthService) { }
 
  getUser() {
    const token = this.authService.getAuthToken();
    
    if (token) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`
      });   
    this.http.get('http://127.0.0.1:8081/api/listeUser', { headers }).subscribe(
      response => {
        this.Users=response;
      },
      error => {
        console.error('Erreur lors de l\'inscription :', error);
      }
    );
  }
}
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
dashboardAdmin(){
  this.router.navigate(['/adminDashboard']);
}
}
