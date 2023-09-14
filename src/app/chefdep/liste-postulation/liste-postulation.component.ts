import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { DataService } from 'src/app/data-service.service';

@Component({
  selector: 'app-liste-postulation',
  templateUrl: './liste-postulation.component.html',
  styleUrls: ['./liste-postulation.component.css']
})
export class ListePostulationComponent {
  constructor(private http: HttpClient, private authService: AuthService, private router: Router, private dataService: DataService) {}

  ngOnInit(): void {
    this.getPostulation();
  }

  postulationsData: any = [];
  classesData: any = [];
  classeName: any = [];
  filiereData: any = [];
  userInfos: any = [];

  getPostulation() {
    const token = this.authService.getAuthToken();
  
    if (token) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`
      });
  
      // Récupération des postulations
      this.http.get("http://127.0.0.1:8081/api/getPostulation", { headers })
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
  validerPostulation(id: number) {
    const token = this.authService.getAuthToken();

    if (token) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`
      });

      this.http.post(`http://127.0.0.1:8081/api/validerC/${id}`, {}, { headers })
        .subscribe(
          (response: any) => {
            console.log('Postulation valider avec succès :', response);
            // Actualiser la liste des postulations après la vérification
            this.getPostulation();
            this.router.navigate(['/listPostulationChef']);
          },
          error => {
            console.error('Erreur lors de la vérification de la postulation :', error);
          }
        );
    } else {
      console.error("Token d'authentification non disponible.");
    }
  }

  refuserPostulation(id: number) {
    const token = this.authService.getAuthToken();

    if (token) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`
      });

      this.http.post(`http://127.0.0.1:8081/api/refuserC/${id}`, {}, { headers })
        .subscribe(
          (response: any) => {
            console.log('Postulation refusé avec succès :', response);
            // Actualiser la liste des postulations après la vérification
            this.getPostulation();
            this.router.navigate(['/listPostulationChef']);
          },
          error => {
            console.error('Erreur lors de la vérification de la postulation :', error);
          }
        );
    } else {
      console.error("Token d'authentification non disponible.");
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
