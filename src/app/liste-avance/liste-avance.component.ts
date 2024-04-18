import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Avance } from '../Entity/Avance.Entity';
import { CrudService } from '../Service/crud.service';

@Component({
  selector: 'app-liste-administrative',
  templateUrl: './liste-avance.component.html',
  styleUrls: ['./liste-avance.component.css']
})
export class ListeAvanceComponent implements OnInit {

  ListeAvance : Avance[]
  constructor(private service : CrudService, private router:Router) { }
  onDeleteAvance(avance : Avance) {
    if(confirm("Voulez vous supprimer cette demande ?")) {
      this.service.deleteAvance(avance.id).subscribe(() => {
        this.router.navigate(['/ListeAvance']).then(() => {
          window.location.reload()
        })
      })}
    }

  ngOnInit(): void {
    this.service.getAvances().subscribe(avances => {
      this.ListeAvance = avances
     
    })
  }

}
