import { Component,EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  @Output() counterno = new EventEmitter<any>();
  @Output() cname = new EventEmitter<any>();

  num: any = '';
  name: any = '';

  onName(custname: string) {
    this.cname.emit(custname);
    console.log(custname);
  }
  onNumber(counternum: string) {
    this.counterno.emit(counternum);
    console.log(counternum);
  }
}
