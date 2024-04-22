import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Brief } from '../Entity/Brief.Entity';
import { CrudService } from '../Service/crud.service';

@Component({
  selector: 'app-liste-brief',
  templateUrl: './liste-brief.component.html',
  styleUrls: ['./liste-brief.component.css']
})
export class ListeBriefComponent implements OnInit {

  ListeBrief : Brief[]
  constructor(private service : CrudService, private router:Router) { }
  onDeleteBrief(brief : Brief) {
    if(confirm("Voulez vous supprimer ce brief ?")) {
      this.service.deleteAdmin(brief.id).subscribe(() => {
        this.router.navigate(['/ListeBrief']).then(() => {
          window.location.reload()
        })
      })}
  }
  ngOnInit(): void {
    
    this.service.getBriefs().subscribe(briefs => {
      this.ListeBrief = briefs
     
    }) }

}

