import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Params, Router, Routes } from '@angular/router';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  constructor(private routes: Router) {}

  status: any = '';

  onGoToInquiry(name: string, num: string) {
    if (name !== '' && num !== '') {
      this.status = true;
    } else {
      this.status = false;
    }
    this.routes.navigate(['/inquiry', name, num, this.status]);
  }

  // @Output() counterno = new EventEmitter<any>();
  // @Output() cname = new EventEmitter<any>();
  // @Output() orderInquiry = new EventEmitter<any>();

  // num: any = '';
  // name: any = '';
  // status: any = '';

  // onName(custname: string) {
  //   this.cname.emit(custname);
  //   console.log(custname);
  // }
  // onNumber(cnum: string) {
  //   this.counterno.emit(cnum);
  //   console.log(cnum);
  // }
  // onOrderInquiry(status: boolean) {
  //   this.orderInquiry.emit(status);
  //   console.log(this.onOrderInquiry);
  // }
}
