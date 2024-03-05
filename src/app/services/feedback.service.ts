import { Injectable } from '@angular/core';
import { OrderService } from './order.service';
import { CustDetailsService } from './cust-details.service';

@Injectable({
  providedIn: 'root',
})
export class FeedbackService {
  constructor(
    private OrderService: OrderService,
    private CustDetailsService: CustDetailsService
  ) {}

  customerfeedback: {
    custname: string;
    ordereditem: string;
    performance: string;
  }[] = [];

  addCustomerFeedback(review: string) {
    this.customerfeedback.push({
      custname: this.CustDetailsService.customerdetails[0]['custName'],
      ordereditem: this.OrderService.ordereditems[0]['name'],
      performance: review,
    });
  }
}
