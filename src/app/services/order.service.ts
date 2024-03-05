import { Injectable } from '@angular/core';
import { last } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor() {}

  ordereditems: {
    name: string;
    price: string;
  }[] = [];

  noofitems: number = 0;
  lastelement: any;

  addItemToOrder(proname: string, proprice: string) {
    // console.log(this.name + ' ' + this.price + ' in order service');
    if (this.ordereditems.length === 0) {
      this.ordereditems.push({ name: proname, price: proprice });
    } else {
      this.lastelement = this.ordereditems.pop();
      this.ordereditems.unshift({ name: proname, price: proprice });
    }
    this.noofitems = this.ordereditems.length;
  }
}
