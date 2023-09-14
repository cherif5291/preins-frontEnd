import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { DataService } from '../data-service.service';


@Component({
  selector: 'app-form-postulation',
  templateUrl: './form-postulation.component.html',
  styleUrls: ['./form-postulation.component.css']
})
export class FormPostulationComponent implements OnInit{
  constructor(private http: HttpClient, private authService: AuthService, private router: Router,private dataService: DataService) {}
  ngOnInit(): void {
    this.getInfos();
    this.dataService.getFilieres().subscribe((data: any) => {
      this.filieres = data;
    });
  }
  userInfos: any = [];
  departments: any[] = [];
  filieres: any[] = [];
  classes: any[] = [];
  selectedFiliere: number | null = null;
  postulation = { classe_id: ''};
  requestStatus: 'success' | 'error' | null = null;
  loading: boolean = false;


  onFiliereChange() {
    if (this.selectedFiliere) {
      this.dataService.getClassesByFilieres(this.selectedFiliere).subscribe((data: any) => {
        this.classes = data;
      });
    }
  }
  getInfos() {
    const token = this.authService.getAuthToken();
    
    if (token) {
      this.loading = true;
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`
      });
      this.requestStatus = null;
      
    this.http.get("http://localhost:8081/api/index", { headers })
    .subscribe((reponse:any)=>{
      this.userInfos=reponse;
    console.log("Retour de la requete ",reponse)
    })
  }
  }
  postuler() {
    const token = this.authService.getAuthToken();
  
    if (token) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`
      });
    this.http.post('http://127.0.0.1:8081/api/postuler', this.postulation, { headers }).subscribe(
      response => {
        console.log('Inscription réussie :', response);
        this.requestStatus = 'success';
        this.router.navigate(['/mesPostulation']);

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
