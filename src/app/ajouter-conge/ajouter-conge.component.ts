import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../Service/crud.service';
import { Conge } from '../Entity/Conge.Entity';


@Component({
  selector: 'app-ajouter-conge',
  templateUrl: './ajouter-conge.component.html',
  styleUrls: ['./ajouter-conge.component.css']
})
export class AjouterCongeComponent implements OnInit {

  messageCommande=""

  CongeForm:FormGroup
constructor(private service :CrudService,private router:Router,private fb:FormBuilder,) {
  let formControls = {
    soldeconge: new FormControl('',[
      Validators.required,]),
      dernierjourtravailler: new FormControl('',[
        Validators.required,]),
        datereprise: new FormControl('',[
          Validators.required,]),
          nombredejourstotal: new FormControl('',[
            Validators.required,]),
            nombredejourretenu: new FormControl('',[
              Validators.required,]),
              raisons: new FormControl('',[
                Validators.required,]),
                responsabledirecte: new FormControl('',[
                  Validators.required,]),
    
    }
   this.CongeForm = this.fb.group(formControls)
 }
 get soldeconge() {return this.CongeForm.get('soldeconge');} 
 get dernierjourtravailler() {return this.CongeForm.get('dernierjourtravailler');} 
 get datereprise() {return this.CongeForm.get('datereprise');} 
 get nombredejourstotal() {return this.CongeForm.get('nombredejourstotal');} 
 get nombredejourretenu() {return this.CongeForm.get('nombredejourretenu');} 
 get raisons() {return this.CongeForm.get('raisons');} 
 get responsabledirecte() {return this.CongeForm.get('responsabledirecte');} 



 addNewConge() {
  let data = this.CongeForm.value;
  console.log(data);
  let conge = new Conge(
   undefined, data.soldeconge,data.dernierjourtravailler,data.datereprise,data.nombredejourstotal,data.nombredejourretenu,data.raisons,data.responsabledirecte);
  console.log(conge);
  
  if (
    data.soldeconge == 0 ||
    data.dernierjourtravailler == 0 ||
    data.datereprise == 0 ||
    data.nombredejourstotal == 0 ||
    data.nombredejourretenu == 0 ||
    data.raisons== 0 ||
    data.responsabledirecte == 0 
    
  ) {
    this.messageCommande=`<div class="alert alert-primary" role="alert">
    remplir votre champ !! 
     </div>`
  } else {
  this.service.addconge(conge).subscribe(
    res=>{
      console.log(res);
      this.messageCommande=`<div class="alert alert-succes" role="alert">
   Demande ajouter avec succées !! 
    </div>`
      
      this.router.navigate(['/AjouterConge']);
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
