import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductListService } from '../services/product-list.service';
import { OrderService } from '../services/order.service';
import { Router } from '@angular/router';
import { CustDetailsService } from '../services/cust-details.service';

@Component({
  selector: 'app-beverages',
  templateUrl: './beverages.component.html',
  styleUrl: './beverages.component.css',
})
export class BeveragesComponent implements OnInit {
  products: {
    id: number;
    name: string;
    price: number;
    status: string;
    type: string;
    img: string;
  }[] = [];

  nooforders: number = 0;
  cname: string = '';

  constructor(
    private ProductListService: ProductListService,
    private CustDetailsService: CustDetailsService,
    private OrderService: OrderService,
    private routes: Router
  ) {}

  ngOnInit() {
    this.products = this.ProductListService.products;
  }
  ngDoCheck() {
    this.nooforders = this.OrderService.noofitems;
  }

  addToOrder(proname: string, proprice: string) {
    console.log(proname + ' ' + proprice);
    this.OrderService.addItemToOrder(proname, proprice);
  }
  onGoToOrder() {
    this.cname = this.CustDetailsService.customerdetails[0]['custName'];
    this.routes.navigate(['/order', this.cname]);
  }
}
