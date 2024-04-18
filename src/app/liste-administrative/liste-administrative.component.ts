import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Administrative } from '../Entity/Administrative.Entity';
import { CrudService } from '../Service/crud.service';

@Component({
  selector: 'app-liste-administrative',
  templateUrl: './liste-administrative.component.html',
  styleUrls: ['./liste-administrative.component.css']
})
export class ListeAdministrativeComponent implements OnInit {

  ListeAdministrative : Administrative[]
  constructor(private service : CrudService, private router:Router) { }
  onDeleteAdministrative(administrative : Administrative) {
    if(confirm("Voulez vous supprimer cette demande ?")) {
      this.service.deleteAdministrative(administrative.id).subscribe(() => {
        this.router.navigate(['/ListeAdministrative']).then(() => {
          window.location.reload()
        })
      })}
    }

  ngOnInit(): void {
    this.service.getAdministratives().subscribe(administratives => {
      this.ListeAdministrative = administratives
     
    })
  }

}
