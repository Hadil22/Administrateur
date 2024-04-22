import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../Service/crud.service';
import { Administrative } from '../Entity/Administrative.Entity';

@Component({
  selector: 'app-ajouter-administrative',
  templateUrl: './ajouter-administrative.component.html',
  styleUrls: ['./ajouter-administrative.component.css']
})
export class AjouterAdministrativeComponent implements OnInit {

  messageCommande=""

  AdministrativeForm:FormGroup
constructor(private service :CrudService,private router:Router,private fb:FormBuilder,) {
  let formControls = {
    type: new FormControl('',[
      Validators.required,]),
    
    }
   this.AdministrativeForm = this.fb.group(formControls)
 }
 get type() {return this.AdministrativeForm.get('type');} 


 addNewAdministrative() {
  let data = this.AdministrativeForm.value;
  console.log(data);
  let administrative = new Administrative(
   undefined, data.type);
  console.log(administrative);
  
  if (
    data.type == 0 
  ) {
    this.messageCommande=`<div class="alert alert-primary" role="alert">
    remplir votre champ !! 
     </div>`
  } else {
  this.service.addadministrative(administrative).subscribe(
    res=>{
      console.log(res);
      this.messageCommande=`<div class="alert alert-succes" role="alert">
   Demande ajouter avec succées !! 
    </div>`
      
      this.router.navigate(['/ListeAdministrative']);
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
