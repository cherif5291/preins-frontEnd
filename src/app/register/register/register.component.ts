import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
   userData = { name: '', email: '', password: '',c_password: '' };

  constructor(private http: HttpClient, private router: Router) { }

  registerUser() {
    this.http.post('http://127.0.0.1:8081/api/register', this.userData).subscribe(
      response => {
        console.log('Inscription réussie :', response);
        this.router.navigate(['/login']);
      },
      error => {
        console.error('Erreur lors de l\'inscription :', error);
      }
    );
  }
}
