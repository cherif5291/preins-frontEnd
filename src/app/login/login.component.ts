import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userData = {email: '', password: ''};
  
  constructor(private http: HttpClient, private router: Router, private authService: AuthService) { }
  loginUser() {
    this.http.post('http://127.0.0.1:8081/api/login', this.userData).subscribe(
      (response:any) => {
        const token = response.data.token;
        this.authService.setAuthToken(token);
        console.log('Connexion réussie :', response);
  
        // Récupérez le rôle de l'utilisateur à partir de la réponse
        const userRole = response.data.role[0];
  
        // Effectuez la redirection en fonction du rôle
        if (userRole === 'admin') {
          this.router.navigate(['/adminDashboard']);
        } else if (userRole === 'secretaire') {
          this.router.navigate(['/secretaireDashboard']);
        } else if (userRole === 'chefdep') {
          this.router.navigate(['/chefdepDashboard']);
        } else {
          // Redirigez vers une page par défaut (peut-être le tableau de bord)
          this.router.navigate(['/postulantDashboard']);
        }
      },
      error => {
        console.error('Erreur lors de la connexion :', error);
      }
    );
  }
  
  
  
  
  
  
  
  

}
