import { Component, OnInit } from '@angular/core';
import { OrderComponent } from '../order/order.component';
import { OrderService } from '../services/order.service';
import { CustDetailsService } from '../services/cust-details.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent  {
  constructor(
    private OrderService: OrderService,
    private CustDetailsService: CustDetailsService,
  ) {}

  title = 'ABC_Cafe';
  noOfItems: number = 0;
  cname:string='';


  ngDoCheck() {
    this.noOfItems = this.OrderService.noofitems;
  }
}
