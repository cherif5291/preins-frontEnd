import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit{

  userData = { name: '',prenom: '', email: '', password: '',c_password: '',role_id: '' };
  roles:any=[];
  constructor(private http: HttpClient, private router: Router, private authService:AuthService) { }

ngOnInit(): void {
    this.getRole();
}


  getRole() {
    const token = this.authService.getAuthToken();
    
    if (token) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`
      });   
    this.http.get('http://127.0.0.1:8081/api/listeRole', { headers }).subscribe(
      response => {
        this.roles=response;
      },
      error => {
        console.error('Erreur lors de l\'inscription :', error);
      }
    );
  }
}
  addUser() {
    const token = this.authService.getAuthToken();
    
    if (token) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`
      });   
    this.http.post('http://127.0.0.1:8081/api/addUser', this.userData, { headers }).subscribe(
      response => {
        console.log('Inscription réussie :', response);
        this.router.navigate(['/listUser']);
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
}
