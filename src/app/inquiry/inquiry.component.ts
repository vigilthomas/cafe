import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustDetailsService } from '../services/cust-details.service';

@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.component.html',
  styleUrl: './inquiry.component.css',
})
export class InquiryComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private routes: Router,
    private CustDetailsService: CustDetailsService
  ) {}

  // @Input() cname: string = '';
  // @Input() counternum: string = '';
  cname: string = '';
  counternumber: string = '';

  ngOnInit() {
    this.cname = this.route.snapshot.params['name'];
    this.counternumber = this.route.snapshot.params['num'];

    this.CustDetailsService.addCustomerDeteails(this.cname, this.counternumber);
  }
  

  onGoToMenu() {
    this.routes.navigate(['/menu',this.cname]);
  }
}
