import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PostulantDashboardComponent } from './postulant-dashboard/postulant-dashboard.component';
import { MesPostulationComponent } from './mes-postulation/mes-postulation.component';
import { FormPostulationComponent } from './form-postulation/form-postulation.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { ListUserComponent } from './admin/list-user/list-user.component';
import { ListPostulationComponent } from './secretaire/list-postulation/list-postulation.component';
import { SecretaireDashboardComponent } from './secretaire/secretaire-dashboard/secretaire-dashboard.component';
import { ChefdefDashboardComponent } from './chefdep/chefdef-dashboard/chefdef-dashboard.component';
import { ListePostulationComponent } from './chefdep/liste-postulation/liste-postulation.component';
import { FormComponent } from './test/form/form.component';
import { AddLivreComponent } from './livre/add-livre/add-livre.component';
import { ListLivreComponent } from './livre/list-livre/list-livre.component'; // Importez HttpClientModule

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    PostulantDashboardComponent,
    MesPostulationComponent,
    FormPostulationComponent,
    AdminDashboardComponent,
    AddUserComponent,
    ListUserComponent,
    ListPostulationComponent,
    SecretaireDashboardComponent,
    ChefdefDashboardComponent,
    ListePostulationComponent,
    FormComponent,
    AddLivreComponent,
    ListLivreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
