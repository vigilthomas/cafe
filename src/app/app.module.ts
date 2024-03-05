import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ABCCafeComponent } from './abc-cafe/abc-cafe.component';
import { OrderComponent } from './order/order.component';
import { FormsModule } from '@angular/forms';
import { RenderHightDirective } from './directives/render-hight.directive';
import { CounterComponent } from './counter/counter.component';
import { InquiryComponent } from './inquiry/inquiry.component';
import { BeveragesComponent } from './beverages/beverages.component';
import { OrderService } from './services/order.service';
import { ProductListService } from './services/product-list.service';
import { PerformanceComponent } from './performance/performance.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CustDetailsService } from './services/cust-details.service';
import { OrderplacedComponent } from './orderplaced/orderplaced.component';
import { FeedbackService } from './services/feedback.service';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ABCCafeComponent,
    OrderComponent,
    RenderHightDirective,
    CounterComponent,
    InquiryComponent,
    BeveragesComponent,
    PerformanceComponent,
    NotfoundComponent,
    OrderplacedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    ProductListService,
    OrderService,
    CustDetailsService,
    FeedbackService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
