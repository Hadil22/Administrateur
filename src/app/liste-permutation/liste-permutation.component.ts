import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Permutation } from '../Entity/Permutation.Entity';
import { CrudService } from '../Service/crud.service';

@Component({
  selector: 'app-liste-permutation',
  templateUrl: './liste-permutation.component.html',
  styleUrls: ['./liste-permutation.component.css']
})
export class ListePermutationComponent implements OnInit {

  ListePermutation : Permutation[]
  constructor(private service : CrudService, private router:Router) { }
  onDeletePermutation(permutation : Permutation) {
    if(confirm("Voulez vous supprimer cet Permutation ?")) {
      this.service.deletePermutation(permutation.id).subscribe(() => {
        this.router.navigate(['/ListePermutation']).then(() => {
          window.location.reload()
        })
      })}
    }

  ngOnInit(): void {
    this.service.getPermutations().subscribe(permutations => {
      this.ListePermutation = permutations
     
    })
  }

}
