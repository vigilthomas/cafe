import { Component,EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  @Output() counterno = new EventEmitter<any>();
  @Output() cname = new EventEmitter<any>();
  @Output() orderInquiry = new EventEmitter<any>();

  num: any = '';
  name: any = '';
  status: any = '';

  onName(custname: string) {
    this.cname.emit(custname);
    console.log(custname);
  }
  onNumber(cnum: string) {
    this.counterno.emit(cnum);
    console.log(cnum);
  }
  onOrderInquiry(status: boolean) {
    this.orderInquiry.emit(status);
    console.log(this.onOrderInquiry);
  }
}
