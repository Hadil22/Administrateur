import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isRHMenuOpen = false; 
  // Cette variable contrôle l'ouverture/fermeture du menu
  isRPMenuOpen = false;

  toggleRHMenu(): void {
    this.isRHMenuOpen = !this.isRHMenuOpen;}
    toggleRPMenu(): void {
      this.isRPMenuOpen = !this.isRPMenuOpen;}
    logout():void{}

  constructor() { }

  ngOnInit(): void {
  }

}
