import { Component, OnInit } from '@angular/core';
import { Kitten } from '../kitten.model';
import { KittenService } from '../kitten.service';

@Component({
  selector: 'app-user-kitten',
  templateUrl: './user-kitten.component.html',
  styleUrls: ['./user-kitten.component.scss']
})
export class UserKittenComponent implements OnInit {


  kittens: Kitten[] = [];
  isAdopted: boolean = true

  constructor(public kittenService: KittenService) { }

  ngOnInit() {
    // console.table(this.kittens)
    this.kittens = this.kittenService.getKittens();

  }
  adoptKitten() {

    this.isAdopted = !this.isAdopted
  }


}
