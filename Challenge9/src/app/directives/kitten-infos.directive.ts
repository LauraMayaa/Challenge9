import { Directive, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appKittenInfos]'
})
export class KittenInfosDirective implements OnInit {

  @HostBinding('') myKittenInfos: string = 'coucou';


  constructor() { }
  ngOnInit(): void {
    ;
  }

  @HostListener('mouseenter') mouseEnterEvent(eventData: Event) {

  }

  @HostListener('mouseleave') mouseLeaveEvent(eventData: Event) {

  }

}
