import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../Service/crud.service';
import { Permission } from '../Entity/Permission.Entity';

@Component({
  selector: 'app-liste-permission',
  templateUrl: './liste-permission.component.html',
  styleUrls: ['./liste-permission.component.css']
})
export class ListePermissionComponent implements OnInit {

  ListePermission : Permission[]
  constructor(private service : CrudService, private router:Router) { }
  onDeletePermission(permission : Permission) {
    if(confirm("Voulez vous supprimer cet Permission ?")) {
      this.service.deletePermission(permission.id).subscribe(() => {
        this.router.navigate(['/ListePermission']).then(() => {
          window.location.reload()
        })
      })}
    }

  ngOnInit(): void {
    this.service.getPermissions().subscribe(permissions => {
      this.ListePermission = permissions
     
    })
  }

}
