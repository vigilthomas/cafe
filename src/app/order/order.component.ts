import { Component, Input, OnChanges, OnInit, input } from '@angular/core';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css',
})
export class OrderComponent {
  ordereditems: {
    name: string;
    price: string;
  }[] = [];

  constructor(private OrderService: OrderService){}

  @Input() cname: string = '';
  @Input() counternum: string = '';

  noofitems: number = 0;

  ngDoCheck() {
    this.ordereditems = this.OrderService.getOrderItems();
    this.noofitems = this.OrderService.noofitems;
    console.log('Fetched data', this.noofitems);
  }

  // @Input() productnames: string[] = [];
  // @Input() productprices: string[] = [];
}
