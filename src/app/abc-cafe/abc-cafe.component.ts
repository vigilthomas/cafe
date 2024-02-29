import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductListService } from '../services/product-list.service';

@Component({
  selector: 'app-abc-cafe',
  templateUrl: './abc-cafe.component.html',
  styleUrl: './abc-cafe.component.css',
  providers: [ProductListService],
})
export class ABCCafeComponent {

  custname: any;
  counterno: any;
  orderInquiry: any;

  getName(name: Event) {
    this.custname = name;
    console.log(this.custname + ' inside parent');
  }
  getNumber(num: Event) {
    this.counterno = num;
    console.log(this.counterno + ' inside parent');
  }
  getStatus(status: Event) {
    this.orderInquiry=status
    console.log(this.orderInquiry);
  }
}
