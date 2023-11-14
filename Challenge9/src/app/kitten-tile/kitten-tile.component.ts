import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Kitten } from '../kitten.model';

@Component({
  selector: 'app-kitten-tile',
  templateUrl: './kitten-tile.component.html',
  styleUrls: ['./kitten-tile.component.scss']
})
export class KittenTileComponent {

  @Input() kitten!: Kitten;
  @Output() adopt: EventEmitter<Kitten> = new EventEmitter<Kitten>();

  adoptKitten() {
    this.kitten.adopted = true
    // this.adopt.emit(this.kitten)
  }

}
