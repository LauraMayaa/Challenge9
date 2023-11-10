import { Component } from '@angular/core';

@Component({
  selector: 'app-user-kitten',
  templateUrl: './user-kitten.component.html',
  styleUrls: ['./user-kitten.component.scss']
})
export class UserKittenComponent {

  userKittens = [
    { image: 'https://www.operationkindness.org/wp-content/uploads/blog-kitten-nursery-operation-kindness.jpg' },
    { image: 'https://www.zooplus.co.uk/magazine/wp-content/uploads/2021/01/striped-grey-kitten.jpg' },
    // Ajoutez d'autres chatons avec leurs URL d'image
  ];


}
