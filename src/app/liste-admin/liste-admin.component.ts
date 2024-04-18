import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../Entity/Admin.Entity';
import { CrudService } from '../Service/crud.service';

@Component({
  selector: 'app-liste-admin',
  templateUrl: './liste-admin.component.html',
  styleUrls: ['./liste-admin.component.css']
})
export class ListeAdminComponent implements OnInit {

  ListeAdmin : Admin[]
  constructor(private service : CrudService, private router:Router) { }
  onDeleteAdmin(admin : Admin) {
    if(confirm("Voulez vous supprimer ce administrateur ?")) {
      this.service.deleteAdmin(admin.id).subscribe(() => {
        this.router.navigate(['/ListeAdmin']).then(() => {
          window.location.reload()
        })
      })}
  }
  ngOnInit(): void {
    
    this.service.getAdmins().subscribe(admins => {
      this.ListeAdmin = admins
     
    }) }

}
