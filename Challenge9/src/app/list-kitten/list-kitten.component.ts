import { Component } from '@angular/core';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.scss']
})
export class ListKittenComponent {
  kittens = [
    { name: 'Minou', race: 'Persan', birthdate: '01-09-2023', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGJ1Gn0oh14NP5mD2q0D8MSC7uOvjvbVuebg&usqp=CAU' },
    { name: 'Félix', race: 'Siamois', birthdate: '01-09-2023', image: 'https://jardinage.lemonde.fr/images/dossiers/2017-06/siamois-3-095105.jpg' },
    { name: 'Whiskers', race: 'Maine Coon', birthdate: '2021-08-20', image: 'https://t1.ea.ltmcdn.com/fr/posts/6/8/7/comment_reconnaitre_un_chaton_maine_coon_3786_orig.jpg' },
    { name: 'Mittens', race: 'British Shorthair', birthdate: '2022-02-10', image: 'https://le-de.cdn-website.com/7b046957bba147a8b0a28fec7143e829/dms3rep/multi/opt/IMG_1118-1--640w.JPG' },
    { name: 'Oliver', race: 'Ragdoll', birthdate: '2021-11-05', image: 'https://excitedcats.com/wp-content/uploads/2021/10/ragdoll-kitten-staring_cath5_Shutterstock.jpg' },
    { name: 'Luna', race: 'Siamese', birthdate: '2022-03-15', image: 'https://images.wagwalkingweb.com/media/daily_wag/blog_articles/hero/1678934108.5188236/everything-you-need-to-know-about-siamese-cats.png' },
    { name: 'Shadow', race: 'Sphynx', birthdate: '2021-07-01', image: 'https://as2.ftcdn.net/v2/jpg/05/07/54/45/1000_F_507544591_Isxk0FpxXugCEsYdw0pV7oqE6w76GJKm.jpg' },
  ];

  onAdopt(): void {
    console.log(this.kittens)
  }

}
