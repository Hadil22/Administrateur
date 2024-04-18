import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterAdminComponent } from './ajouter-admin/ajouter-admin.component';
import { ListeAdminComponent } from './liste-admin/liste-admin.component';
import { LoginComponent } from './login/login.component';
import { ListeAdministrativeComponent } from './liste-administrative/liste-administrative.component';
import { AjouterAdministrativeComponent } from './ajouter-administrative/ajouter-administrative.component';
import { AjouterAvanceComponent } from './ajouter-avance/ajouter-avance.component';
import { ListeAvanceComponent } from './liste-avance/liste-avance.component';
import { AjouterCongeComponent } from './ajouter-conge/ajouter-conge.component';
import { AjouterPermutationComponent } from './ajouter-permutation/ajouter-permutation.component';
import { ListePermutationComponent } from './liste-permutation/liste-permutation.component';
import { AjouterPermissionComponent } from './ajouter-permission/ajouter-permission.component';
import { ListePermissionComponent } from './liste-permission/liste-permission.component';

const routes: Routes = [
  {path:'',component:AjouterAdminComponent},
  {path:'ListeAdmin',component:ListeAdminComponent},
  {path:'Login',component:LoginComponent},
  {path:'ListeAdministrative',component:ListeAdministrativeComponent},
  {path:'AjouterAdministrative',component:AjouterAdministrativeComponent},
  {path:'AjouterAvance',component:AjouterAvanceComponent},
  {path:'ListeAvance',component:ListeAvanceComponent},
  {path:'AjouterConge',component:AjouterCongeComponent},
  {path:'AjouterPermutation',component:AjouterPermutationComponent},
  {path:'ListePermutation',component:ListePermutationComponent},
  {path:'AjouterPermission',component:AjouterPermissionComponent},
  {path:'ListePermission',component:ListePermissionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
