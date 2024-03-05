import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../services/feedback.service';
import { OrderService } from '../services/order.service';
import { Route, Router } from '@angular/router';
import { CustDetailsService } from '../services/cust-details.service';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrl: './performance.component.css',
})
export class PerformanceComponent implements OnInit {
  constructor(
    private FeedbackService: FeedbackService,
    private routes: Router,
    private OrderService: OrderService,
    private CustDetailsService: CustDetailsService
  ) {}

  review: string = '';
  cname: string = '';
  ordereditem: string = '';

customerfeedback: {
    custname: string;
    ordereditem: string;
    performance: string;
  }[] = [];

  good: number = 0;
  average: number = 0;
  poor: number = 0;

  ordered=false;

  feedbackSubmitted = 0;

  ngOnInit() {
    this.customerfeedback = this.FeedbackService.customerfeedback;

    this.cname= this.CustDetailsService.customerdetails[0]['custName']
    this.ordereditem= this.OrderService.ordereditems[0]['name']

    if(this.ordereditem!=''){
      this.ordered=true
    }


  }

  ngDoCheck() {
    this.good = this.FeedbackService.customerfeedback.filter(
      (feedback) => feedback.performance === 'Good'
    ).length;
    this.average = this.FeedbackService.customerfeedback.filter(
      (feedback) => feedback.performance === 'Average'
    ).length;
    this.poor = this.FeedbackService.customerfeedback.filter(
      (feedback) => feedback.performance === 'Poor'
    ).length;
  }

  onClickGood() {
    this.review = 'Good';
  }
  onClickAverage() {
    this.review = 'Average';
  }
  onClickPoor() {
    this.review = 'Poor';
  }

  onSubmitReview() {
    this.FeedbackService.addCustomerFeedback(this.review);
    this.feedbackSubmitted = 1;
    this.ordered=false
  }
  onContinueOrdering() {
    this.routes.navigate(['/menu', this.cname]);
  }
}
