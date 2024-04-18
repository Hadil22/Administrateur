import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../Service/crud.service';
import { Permutation } from '../Entity/Permutation.Entity';


@Component({
  selector: 'app-ajouter-permutation',
  templateUrl: './ajouter-permutation.component.html',
  styleUrls: ['./ajouter-permutation.component.css']
})
export class AjouterPermutationComponent implements OnInit {

  messageCommande=""

  PermutationForm:FormGroup
constructor(private service :CrudService,private router:Router,private fb:FormBuilder,) {
  let formControls = {
                    permuteravec: new FormControl('',[ 
                      Validators.required,]), 
                        dateDebut: new FormControl('',[ 
                          Validators.required,]), 
                          dateFin: new FormControl('',[ 
                            Validators.required,]), 
                            raisons: new FormControl('',[ 
                              Validators.required,]),
    }
   this.PermutationForm = this.fb.group(formControls)
 }
 get permuteravec() {return this.PermutationForm.get('permuteravec');}  
 get dateDebut() {return this.PermutationForm.get('dateDebut');}  
 get dateFin() {return this.PermutationForm.get('dateFin');}  
 get raisons() {return this.PermutationForm.get('raisons');}


 addNewPermutation() {
  let data = this.PermutationForm.value;
  console.log(data);
  let permutation = new Permutation(
   undefined, data.permuteravec,data.dateDebut,data.dateFin,data.raisons);
  console.log(permutation);
  
  if (
    data.permuteravec == 0 || 
    data.dateDebut == 0 || 
    data.dateFin == 0 || 
    data.raisons == 0
  ) {
    this.messageCommande=`<div class="alert alert-primary" role="alert">
    remplir votre champ !! 
     </div>`
  } else {
  this.service.addpermutation(permutation).subscribe(
    res=>{
      console.log(res);
      this.messageCommande=`<div class="alert alert-succes" role="alert">
   Demande ajouter avec succées !! 
    </div>`
      
      this.router.navigate(['/ListePermutation']);
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
