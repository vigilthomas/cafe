import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductListService } from '../services/product-list.service';
import { OrderService } from '../services/order.service';

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


  constructor(
    private ProductListService: ProductListService,
    private OrderService: OrderService
  ) {}

  ngOnInit() {
    this.products = this.ProductListService.products;
  }



  addToOrder(proname: string, proprice: string) {
    console.log(proname+" "+proprice)
    this.OrderService.addItemToOrder(proname,proprice);
    this.OrderService.getOrderItems();
  }
}
