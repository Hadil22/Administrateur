import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../Service/crud.service';
import { Router } from '@angular/router';
import { Emargement } from '../Entity/Emargement.Entity';

@Component({
  selector: 'app-ajouter-emargement',
  templateUrl: './ajouter-emargement.component.html',
  styleUrls: ['./ajouter-emargement.component.css']
})
export class AjouterEmargementComponent implements OnInit {

  messageCommande=""

  EmargementForm:FormGroup
constructor(private service :CrudService,private router:Router,private fb:FormBuilder,) {
  let formControls = {
    endroit: new FormControl('',[
      Validators.required,]),
    date: new FormControl('',[
      Validators.required,]),
    objet: new FormControl('',[
        Validators.required,]),
    listedesgroupes: new FormControl('',[
      Validators.required,]),
    listedesagents: new FormControl('',[
       Validators.required,]),
    debutetfin: new FormControl('',[
      Validators.required,]),
    commentaires: new FormControl('',[
      Validators.required,])
    }
   this.EmargementForm = this.fb.group(formControls)
 }
 get endroit() {return this.EmargementForm.get('endroit');} 
get date() { return this.EmargementForm.get('date');}
get objet() {return this.EmargementForm.get('objet');}
get listedesgroupes() {return this.EmargementForm.get('listedesgroupes');}
get listedesagents() { return this.EmargementForm.get('listedesagents');}
get debutetfin() { return this.EmargementForm.get('debutetfin');}
get commentaires() { return this.EmargementForm.get('commentaires');}

 addNewEmargement() {
  let data = this.EmargementForm.value;
  console.log(data);
  let emargement = new Emargement(
    undefined, data.endroit, data.date, data.objet, data.listedesgroupes, data.listedesagents, data.debutetfin, data.commentaires);

  console.log(emargement);
  
  if (
    data.endroit == 0 ||
    data.date == 0 ||
    data.objet == 0 ||
    data.listedesgroupes == 0 ||
    data.listedesagents == 0 ||
    data.debutetfin == 0 ||
    data.commentaires == 0
  ) {
    this.messageCommande=`<div class="alert alert-primary" role="alert">
    remplir votre champ !! 
     </div>`
  } else {
  this.service.addemargement(emargement).subscribe(
    res=>{
      console.log(res);
      this.messageCommande=`<div class="alert alert-succes" role="alert">
   Emargeement ajouter avec succées !! 
    </div>`
      
      this.router.navigate(['/ListeEmargement']);
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
