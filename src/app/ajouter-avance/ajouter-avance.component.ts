import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../Service/crud.service';
import { Avance } from '../Entity/Avance.Entity';

@Component({
  selector: 'app-ajouter-administrative',
  templateUrl: './ajouter-avance.component.html',
  styleUrls: ['./ajouter-avance.component.css']
})
export class AjouterAvanceComponent implements OnInit {

  messageCommande=""

  AvanceForm:FormGroup
constructor(private service :CrudService,private router:Router,private fb:FormBuilder,) {
  let formControls = {
    montantenchiffre: new FormControl('',[
      Validators.required,]),
      montant: new FormControl('',[
        Validators.required,]),
      numcin: new FormControl('',[
          Validators.required,]),
      delivree: new FormControl('',[
            Validators.required,]),
      gouvernorat: new FormControl('',[
              Validators.required,]),
      moisderemboursement: new FormControl('',[
                Validators.required,]),
      annee: new FormControl('',[
                  Validators.required,]),
      responsable: new FormControl('',[
                    Validators.required,]),
    
    }
   this.AvanceForm = this.fb.group(formControls)
 }
 get montantenchiffre() {return this.AvanceForm.get('montantenchiffre');} 
 get montant() {return this.AvanceForm.get('montant');} 
 get numcin() {return this.AvanceForm.get('numcin');} 
 get delivree() {return this.AvanceForm.get('delivree');} 
 get gouvernorat() {return this.AvanceForm.get('gouvernorat');} 
 get moisderemboursement() {return this.AvanceForm.get('moisderemboursement');} 
 get annee() {return this.AvanceForm.get('annee');} 
 get responsable() {return this.AvanceForm.get('responsable');} 


 addNewAvance() {
  let data = this.AvanceForm.value;
  console.log(data);
  let avance = new Avance(
   undefined, data.montantenchiffre,data.montant,data.numcin,data.delivree,data.gouvernorat,data.moisderemboursement,data.annee,data.responsable);
  console.log(avance);
  
  if (
    data.montantenchiffre == 0 ||
    data.montant == 0 ||
    data.numcin == 0 ||
    data.delivree == 0 ||
    data.gouvernorat == 0 ||
    data.moisderemboursement== 0 ||
    data.annee == 0 ||
    data.responsable == 0 
  ) {
    this.messageCommande=`<div class="alert alert-primary" role="alert">
    remplir votre champ !! 
     </div>`
  } else {
  this.service.addavance(avance).subscribe(
    res=>{
      console.log(res);
      this.messageCommande=`<div class="alert alert-succes" role="alert">
   Demande ajouter avec succées !! 
    </div>`
      
      this.router.navigate(['/ListeAvance']);
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
