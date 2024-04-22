import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { CrudService } from '../Service/crud.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isUserMenuOpen = false;
  isNotificationMenuOpen=false;
  isStyleMenuOpen=false;


toggleStyleMenu():void{
    this.isStyleMenuOpen = !this.isStyleMenuOpen;
  }


  toggleNotificationMenu():void{
    this.isNotificationMenuOpen = !this.isNotificationMenuOpen;
  }
  toggleUserMenu(): void {
    this.isUserMenuOpen = !this.isUserMenuOpen;}

  userDetails:any;

  constructor(private service: CrudService,private router:Router) { 
   this.userDetails = this.service.userDetails();
  }
 

  ngOnInit(): void {
    console.log(this.userDetails);
  }
  logout(): void{
    console.log("logout");
    localStorage.clear()
    this.router.navigate(['/Login']).then(() => {
      
    })
    
  }
}
