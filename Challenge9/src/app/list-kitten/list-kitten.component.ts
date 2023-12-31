import { Component, OnInit } from '@angular/core';
import { Kitten } from '../kitten.model';
import { KittenService } from '../kitten.service';
import { Observable, of } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.scss']
})
export class ListKittenComponent implements OnInit {

  isAdopted: boolean = false
  kittens$: Observable<Kitten[]> = of([]);
  send$: Observable<FormGroup> = of()
  // adoptedKittens: [] = [];

  constructor(public kittenService: KittenService) { }

  ngOnInit() {
    // console.table(this.kittens)
    this.kittens$ = this.kittenService.getKittens();
    
  }

  // adoptKitten(kitten: Kitten) {
  //   // envoyer le chaton dans user et le retirer de list 
  //   // this.isAdopted = !this.isAdopted
  //   this.kittenService.adoptKitten(kitten);


  // }

}
