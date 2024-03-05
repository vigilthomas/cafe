import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-abc-cafe',
  templateUrl: './abc-cafe.component.html',
  styleUrl: './abc-cafe.component.css',
})
export class ABCCafeComponent {
  constructor(private route:Router){}
  custname: any;
  counterno: any;
  orderInquiry:any;

  getName(name: Event) {
    this.custname = name;
    console.log(this.custname + ' inside parent');
  }
  getNumber(num: Event) {
    this.counterno = num;
    console.log(this.counterno + ' inside parent');
  }
  getStatus(status: Event) {
    this.orderInquiry=status;
  }
}
