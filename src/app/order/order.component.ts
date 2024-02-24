import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css',
})
export class OrderComponent {
  @Input() items: string[] = [];
  @Input() noOfItems: any;

  ngOnChanges(){
    this.test()
  }
  test(){ 
    console.log(this.noOfItems);
  }
}
