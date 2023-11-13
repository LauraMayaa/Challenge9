import { Injectable } from '@angular/core';
import { Kitten } from './kitten.model';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KittenService {

  adoptedKittens: Kitten[] = [];

  kittens: Kitten[] = [
    {
      name: 'Minou',
      race: 'Persan',
      birthdate: '01-09-2023',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGJ1Gn0oh14NP5mD2q0D8MSC7uOvjvbVuebg&usqp=CAU',
      adopted: true
    },
    { name: 'Félix', race: 'Siamois', birthdate: '01-09-2023', image: 'https://jardinage.lemonde.fr/images/dossiers/2017-06/siamois-3-095105.jpg', adopted: true },
    { name: 'Whiskers', race: 'Maine Coon', birthdate: '01-09-2023', image: 'https://t1.ea.ltmcdn.com/fr/posts/6/8/7/comment_reconnaitre_un_chaton_maine_coon_3786_orig.jpg', adopted: true },
    { name: 'Mittens', race: 'British Shorthair', birthdate: '01-09-2023', image: 'https://le-de.cdn-website.com/7b046957bba147a8b0a28fec7143e829/dms3rep/multi/opt/IMG_1118-1--640w.JPG', adopted: true },
    { name: 'Oliver', race: 'Ragdoll', birthdate: '01-09-2023', image: 'https://excitedcats.com/wp-content/uploads/2021/10/ragdoll-kitten-staring_cath5_Shutterstock.jpg', adopted: true },
    { name: 'Luna', race: 'Siamese', birthdate: '01-09-2023', image: 'https://images.wagwalkingweb.com/media/daily_wag/blog_articles/hero/1678934108.5188236/everything-you-need-to-know-about-siamese-cats.png', adopted: true },
    { name: 'Shadow', race: 'Sphynx', birthdate: '01-09-2023', image: 'https://as2.ftcdn.net/v2/jpg/05/07/54/45/1000_F_507544591_Isxk0FpxXugCEsYdw0pV7oqE6w76GJKm.jpg', adopted: true },
  ];


  constructor() { }

  public getKittens(): Kitten[] {
    // return of(this.kittens)
    return this.kittens
  }

  getAdoptedKittens(): Kitten[] {
    return this.adoptedKittens;
  }

  adoptKitten(kitten: Kitten) {
    kitten.adopted = true;
    const index = this.kittens.indexOf(kitten);
    if (index !== -1) {
      this.kittens.splice(index, 1);
      this.adoptedKittens.push(kitten);
    }
  }


}
