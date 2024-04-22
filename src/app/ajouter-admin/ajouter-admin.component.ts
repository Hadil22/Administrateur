import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../Service/crud.service';
import { Admin } from '../Entity/Admin.Entity';

@Component({
  selector: 'app-ajouter-admin',
  templateUrl: './ajouter-admin.component.html',
  styleUrls: ['./ajouter-admin.component.css']
})
export class AjouterAdminComponent implements OnInit {
 
  messageCommande=""

  AdminForm:FormGroup
constructor(private service :CrudService,private router:Router,private fb:FormBuilder,) {
  let formControls = {
    nom: new FormControl('',[
      Validators.required,]),
    prenom: new FormControl('',[
      Validators.required,]),
    email: new FormControl('',[
        Validators.required,
      Validators.email]),
    mdp: new FormControl('',[
      Validators.required,]),
      role: new FormControl('',[
       Validators.required,]),
    }
   this.AdminForm = this.fb.group(formControls)
 }
 get nom() {return this.AdminForm.get('nom');} 
get prenom() { return this.AdminForm.get('prenom');}
get email() {return this.AdminForm.get('email');}
get mdp() {return this.AdminForm.get('mdp');}
get role() { return this.AdminForm.get('role');}

 addNewAdmin() {
  let data = this.AdminForm.value;
  console.log(data);
  let admin = new Admin(
   undefined, data.nom,data.prenom,data.email,data.mdp,data.role);
  console.log(admin);
  
  if (
    data.nom == 0 ||
    data.prenom == 0||
    data.email == 0 ||
    data.mdp == 0 ||
    data.role == 0
  ) {
    this.messageCommande=`<div class="alert alert-primary" role="alert">
    remplir votre champ !! 
     </div>`
  } else {
  this.service.addadmin(admin).subscribe(
    res=>{
      console.log(res);
      this.messageCommande=`<div class="alert alert-succes" role="alert">
   Administrateur ajouter avec succées !! 
    </div>`
      
      this.router.navigate(['/ListeAdmin']);
    },
    err=>{
      console.log(err);
      this.messageCommande=`<div class="alert alert-danger" role="alert">
      Erreur de serveur !! 
       </div>` }
  )

  }
}


  ngOnInit(): void {
  }

}
