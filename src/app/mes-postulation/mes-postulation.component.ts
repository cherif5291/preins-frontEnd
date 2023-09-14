import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mes-postulation',
  templateUrl: './mes-postulation.component.html',
  styleUrls: ['./mes-postulation.component.css']
})
export class MesPostulationComponent implements OnInit {
  constructor(private http: HttpClient, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.getPostulation();
    this.userInfos();
  }

  postulationsData: any = [];
  classesData: any = [];
  classeName: any = [];
  filiereData: any = [];
  userInfos: any = [];


  getFiliere() {
    const token = this.authService.getAuthToken();
    
    if (token) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`
      });
      
    this.http.get("http://localhost:8081/api/filiere", { headers })
    .subscribe((reponse:any)=>{
      this.filiereData=reponse;
    console.log("Retour de la requete ",reponse)
    })
  }
  }
  getPostulation() {
    const token = this.authService.getAuthToken();
  
    if (token) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`
      });
  
      // Récupération des postulations
      this.http.get("http://127.0.0.1:8081/api/mesPostulations", { headers })
        .subscribe(
          (response: any) => {
            this.postulationsData = response;

            // Récupération des classes
            this.http.get("http://127.0.0.1:8081/api/classe", { headers })
              .subscribe(
                (classesResponse: any) => {
                  this.classesData = classesResponse;
                  console.log("Retour de la requête ", classesResponse);
  
                  // Remplacement des IDs par les libellés
                  this.postulationsData.forEach((postulation: any) => {
                    const classe = this.classesData.find((cl: any) => cl.id === postulation.classe_id);
                    if (classe) {
                      postulation.classe_id = classe.libelle;
                    }
                    postulation.created_at = this.formatDate(postulation.created_at);
                  });
                },
                (error) => {
                  console.error("Erreur lors de la récupération des classes :", error);
                }
              );
  
            console.log("Retour de la requête ", response);
          },
          (error) => {
            console.error("Erreur lors de la récupération des postulations :", error);
          }
        );
    } else {
      console.error("Token d'authentification non disponible.");
    }
  }
  formatDate(dateStr: string): string {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = new Date(dateStr).toLocaleDateString('en-US', options);
    return formattedDate;
  }
  

  /*FONVTION POUR LOGOUT CAD SUPPRIMER LE TOKEN*/
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
