import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css',
})
export class BannerComponent {
  cname: string = '';

  enteredname(eventData: Event) {
    this.cname = (<HTMLInputElement>eventData.target).value;
  }
  
}
