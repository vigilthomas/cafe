import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { InquiryComponent } from './inquiry/inquiry.component';
import { BeveragesComponent } from './beverages/beverages.component';
import { OrderComponent } from './order/order.component';
import { PerformanceComponent } from './performance/performance.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { OrderplacedComponent } from './orderplaced/orderplaced.component';

const routes: Routes = [
  { path: '', component: CounterComponent },
  { path: 'home', component: CounterComponent },
  { path: 'inquiry/:name/:num/true', component: InquiryComponent },
  { path: 'menu/:name', component: BeveragesComponent },
  { path: 'order/:name', component: OrderComponent },
  { path: 'order_placed/:name', component: OrderplacedComponent },
  { path: 'feedback/:name', component: PerformanceComponent },

  { path: 'notfound', component: NotfoundComponent },
  { path: '**', redirectTo: 'notfound' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  
  
}
