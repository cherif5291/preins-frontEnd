import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-secretaire-dashboard',
  templateUrl: './secretaire-dashboard.component.html',
  styleUrls: ['./secretaire-dashboard.component.css']
})
export class SecretaireDashboardComponent implements OnInit{
  constructor(private http: HttpClient, private authService: AuthService, private router: Router) {}
  ngOnInit(): void {
    this.userInfos;
  }
  userInfos: any = [];
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
  getInfos() {
    const token = this.authService.getAuthToken();
    
    if (token) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`
      });      
    this.http.get("http://localhost:8081/api/index", { headers })
    .subscribe((reponse:any)=>{
      this.userInfos=reponse;
    console.log("Retour de la requete ",reponse)
    })
  }
  }
}
