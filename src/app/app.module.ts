import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjouterAdminComponent } from './ajouter-admin/ajouter-admin.component';
import { ListeAdminComponent } from './liste-admin/liste-admin.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AjouterAdministrativeComponent } from './ajouter-administrative/ajouter-administrative.component';
import { ListeAdministrativeComponent } from './liste-administrative/liste-administrative.component';
import { AjouterAvanceComponent } from './ajouter-avance/ajouter-avance.component';
import { ListeAvanceComponent } from './liste-avance/liste-avance.component';
import { AjouterCongeComponent } from './ajouter-conge/ajouter-conge.component';
import { ListeCongeComponent } from './liste-conge/liste-conge.component';
import { AjouterPermissionComponent } from './ajouter-permission/ajouter-permission.component';
import { ListePermissionComponent } from './liste-permission/liste-permission.component';
import { AjouterPermutationComponent } from './ajouter-permutation/ajouter-permutation.component';
import { ListePermutationComponent } from './liste-permutation/liste-permutation.component';


@NgModule({
  declarations: [
    AppComponent,
    AjouterAdminComponent,
    ListeAdminComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    AjouterAdministrativeComponent,
    ListeAdministrativeComponent,
    AjouterAvanceComponent,
    ListeAvanceComponent,
    AjouterCongeComponent,
    ListeCongeComponent,
    AjouterPermissionComponent,
    ListePermissionComponent,
    AjouterPermutationComponent,
    ListePermutationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
