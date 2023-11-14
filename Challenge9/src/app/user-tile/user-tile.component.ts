import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Kitten } from '../kitten.model';

@Component({
  selector: 'app-user-tile',
  templateUrl: './user-tile.component.html',
  styleUrls: ['./user-tile.component.scss']
})
export class UserTileComponent {

  @Input() kitten!: Kitten;
  @Output() adopt: EventEmitter<Kitten> = new EventEmitter<Kitten>();

  onDelete() {
    this.kitten.adopted = false
  }

}
