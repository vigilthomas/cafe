import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustDetailsService {
  constructor() {}
  customerdetails: {
    custName: string;
    counterNo: string;
  }[]=[];


  
  addCustomerDeteails(custname: string, counterno: string) {
    // console.log(this.name + ' ' + this.price + ' in order service');
    if (this.customerdetails.length === 0) {
    this.customerdetails.push({ custName: custname, counterNo: counterno });
    } else {
      this.customerdetails.unshift({ custName: custname, counterNo: counterno });
    }
  }
}