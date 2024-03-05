import { Component, Input, OnChanges, OnInit, input } from '@angular/core';
import { OrderService } from '../services/order.service';
import { CustDetailsService } from '../services/cust-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css',
})
export class OrderComponent implements OnInit {
  ordereditems: {
    name: string;
    price: string;
  }[] = [];

  constructor(
    private OrderService: OrderService,
    private routes: Router,
    private CustDetailsService: CustDetailsService
  ) {}

    custName: string='';
    counterNo: string='';

  @Input() cname: string = '';
  @Input() counternum: string = '';

  noofitems: number = 0;

  ngOnInit() {
    this.custName = this.CustDetailsService.customerdetails[0]['custName'];
    this.counterNo = this.CustDetailsService.customerdetails[0]['counterNo'];
  }

  ngDoCheck() {
    this.ordereditems = this.OrderService.ordereditems;
    this.noofitems = this.OrderService.noofitems;
  }

  onGoToOrderPlaced() {
    this.cname=this.custName;
    this.routes.navigate(['/order_placed', this.cname]);
  }
}
