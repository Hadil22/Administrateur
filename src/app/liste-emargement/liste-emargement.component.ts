import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Emargement } from '../Entity/Emargement.Entity';
import { CrudService } from '../Service/crud.service';

@Component({
  selector: 'app-liste-emargement',
  templateUrl: './liste-emargement.component.html',
  styleUrls: ['./liste-emargement.component.css']
})
export class ListeEmargementComponent implements OnInit {

  ListeEmargement : Emargement[]
  constructor(private service : CrudService, private router:Router) { }
  onDeleteEmargement(emargement : Emargement) {
    if(confirm("Voulez vous supprimer cet emargement ?")) {
      this.service.deleteEmargement(emargement.id).subscribe(() => {
        this.router.navigate(['/ListeEmargement']).then(() => {
          window.location.reload()
        })
      })}
  }
  ngOnInit(): void {
    
    this.service.getEmargements().subscribe(emargements => {
      this.ListeEmargement = emargements
     
    }) }

}
