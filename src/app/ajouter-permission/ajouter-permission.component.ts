import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../Service/crud.service';
import { Permission } from '../Entity/Permission.Entity';


@Component({
  selector: 'app-ajouter-permition',
  templateUrl: './ajouter-permission.component.html',
  styleUrls: ['./ajouter-permission.component.css']
})
export class AjouterPermissionComponent implements OnInit {

  messageCommande=""

  PermissionForm:FormGroup
constructor(private service :CrudService,private router:Router,private fb:FormBuilder,) {
  let formControls = {
    jourpermission: new FormControl('',[ 
                      Validators.required,]), 
                      heurete: new FormControl('',[ 
                          Validators.required,]), 
                          permissionpour: new FormControl('',[ 
                            Validators.required,]), 
                            raisons: new FormControl('',[ 
                              Validators.required,]),
                              responsabledirecte: new FormControl('',[ 
                              Validators.required,]),
    }
   this.PermissionForm = this.fb.group(formControls)
 }
 get jourpermission() {return this.PermissionForm.get('jourpermission');}  
 get heurete() {return this.PermissionForm.get('heurete');}  
 get permissionpour() {return this.PermissionForm.get('permissionpour');}  
 get raisons() {return this.PermissionForm.get('raisons');}
 get responsabledirecte() {return this.PermissionForm.get('responsabledirecte');}


 addNewPermission() {
  let data = this.PermissionForm.value;
  console.log(data);
  let permission = new Permission(
   undefined, data.jourpermission,data.heurete,data.permissionpour,data.raisons,data.responsabledirecte);
  console.log(permission);
  
  if (
    data.jourpermission == 0  ||
    data.heurete == 0  ||
    data.permissionpour == 0  ||
    data.raisons == 0  ||
    data.responsabledirecte == 0

  ) {
    this.messageCommande=`<div class="alert alert-primary" role="alert">
    remplir votre champ !! 
     </div>`
  } else {
  this.service.addpermission(permission).subscribe(
    res=>{
      console.log(res);
      this.messageCommande=`<div class="alert alert-succes" role="alert">
   Demande ajouter avec succées !! 
    </div>`
      
      this.router.navigate(['/ListePermission']);
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