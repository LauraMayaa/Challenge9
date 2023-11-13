import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KittenTileComponent } from './kitten-tile.component';

describe('KittenTileComponent', () => {
  let component: KittenTileComponent;
  let fixture: ComponentFixture<KittenTileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KittenTileComponent]
    });
    fixture = TestBed.createComponent(KittenTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
