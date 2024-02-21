import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  cname: string = '';
  status: boolean = true;

  enteredname(eventData: Event) {
    this.cname = (<HTMLInputElement>eventData.target).value;
  }
  displayname() {
    this.status = false;
  }


}
