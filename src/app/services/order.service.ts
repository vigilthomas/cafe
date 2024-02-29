import { Injectable } from '@angular/core';

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

  addItemToOrder(proname: string, proprice: string) {
    // console.log(this.name + ' ' + this.price + ' in order service');

    this.ordereditems.push({ name: proname, price: proprice });

    console.log(
      this.ordereditems[0]['name'] +
        ' ' +
        this.ordereditems[0]['price'] +
        ' in order service'
    );

    this.noofitems = this.ordereditems.length;
  }

  getOrderItems() {
    console.log('getting from service', this.ordereditems);
    return this.ordereditems;
  }
}
