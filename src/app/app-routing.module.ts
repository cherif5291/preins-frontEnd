import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PostulantDashboardComponent } from './postulant-dashboard/postulant-dashboard.component';
import { MesPostulationComponent } from './mes-postulation/mes-postulation.component';
import { FormPostulationComponent } from './form-postulation/form-postulation.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { ListUserComponent } from './admin/list-user/list-user.component';
import { SecretaireDashboardComponent } from './secretaire/secretaire-dashboard/secretaire-dashboard.component';
import { ListPostulationComponent } from './secretaire/list-postulation/list-postulation.component';
import { ChefdefDashboardComponent } from './chefdep/chefdef-dashboard/chefdef-dashboard.component';
import { ListePostulationComponent } from './chefdep/liste-postulation/liste-postulation.component';
import { FormComponent } from './test/form/form.component';
const routes: Routes = [
  { path: '', component: HomeComponent},

  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent},
  { path: 'postulantDashboard', component: PostulantDashboardComponent},
  { path: 'mesPostulation', component: MesPostulationComponent},
  { path: 'formPostulation', component: FormPostulationComponent},
  { path: 'adminDashboard', component: AdminDashboardComponent},
  { path: 'addUser', component: AddUserComponent},
  { path: 'listUser', component: ListUserComponent},
  { path: 'secretaireDashboard', component: SecretaireDashboardComponent},
  { path: 'listPostulation', component: ListPostulationComponent},
  { path: 'listUser', component: ListUserComponent},
  { path: 'chefdepDashboard', component: ChefdefDashboardComponent},
  { path: 'listPostulationChef', component: ListePostulationComponent},





  // Autres routes...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
