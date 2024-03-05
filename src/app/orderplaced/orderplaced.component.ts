import { Component, OnInit } from '@angular/core';
import { CustDetailsService } from '../services/cust-details.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-orderplaced',
  templateUrl: './orderplaced.component.html',
  styleUrl: './orderplaced.component.css',
})
export class OrderplacedComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private routes: Router,
    private CustDetailsService: CustDetailsService,
    private OrderService: OrderService
  ) {}

  cname: string = '';
  counternumber: string = '';

  ngOnInit() {
    this.OrderService.noofitems = 0;
  }
  onGoToFeedBack() {
    this.routes.navigate(['/feedback', this.cname]);
  }
}
