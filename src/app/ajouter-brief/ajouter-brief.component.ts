import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../Service/crud.service';
import { Brief } from '../Entity/Brief.Entity';

@Component({
  selector: 'app-ajouter-brief',
  templateUrl: './ajouter-brief.component.html',
  styleUrls: ['./ajouter-brief.component.css']
})
export class AjouterBriefComponent implements OnInit {

  messageCommande=""

  BriefForm:FormGroup
constructor(private service :CrudService,private router:Router,private fb:FormBuilder,) {
  let formControls = {
    employe: new FormControl('',[
      Validators.required,]),
    objet: new FormControl('',[
      Validators.required,]),
    analyse: new FormControl('',[
        Validators.required,,]),
    pointsforts: new FormControl('',[
      Validators.required,]),
    axesdeprogres: new FormControl('',[
     Validators.required,]),
     moyens: new FormControl('',[
      Validators.required,]),
    attachement: new FormControl('',[
      Validators.required,]),
    }
   this.BriefForm = this.fb.group(formControls)
 }
 get employe() {return this.BriefForm.get('employe');} 
get objet() { return this.BriefForm.get('objet');}
get analyse() {return this.BriefForm.get('analyse');}
get pointsforts() {return this.BriefForm.get('pointsfort');}
get axesdeprogres() { return this.BriefForm.get('axesdeprogres');}
get moyens() { return this.BriefForm.get('moyens');}
get attachement() { return this.BriefForm.get('attachement');}

 addNewBrief() {
  let data = this.BriefForm.value;
  console.log(data);
  let brief = new Brief(
   undefined, data.employe,data.objet,data.analyse,data.pointsfort,data.axesdeprogres,data.moyens,data.attachement);
  console.log(brief);
  
  if (
    data.employe == 0 ||
    data.objet == 0||
    data.analyse == 0 ||
    data.pointsforts == 0 ||
    data.axesdeprogres == 0 ||
    data.moyens == 0 ||
    data.attachement
  ) {
    this.messageCommande=`<div class="alert alert-primary" role="alert">
    remplir votre champ !! 
     </div>`
  } else {
  this.service.addadmin(brief).subscribe(
    res=>{
      console.log(res);
      this.messageCommande=`<div class="alert alert-succes" role="alert">
   Brief ajouter avec succées !! 
    </div>`
      
      this.router.navigate(['/ListeBrief']);
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


  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      console.log('Selected file:', file);
    }
  }
}
