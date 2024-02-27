import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ABCCafeComponent } from './abc-cafe/abc-cafe.component';
import { OrderComponent } from './order/order.component';
import { FilterComponent } from './filter/filter.component';
import { FormsModule } from '@angular/forms';
import { RenderHightDirective } from './directives/render-hight.directive';
import { CounterComponent } from './counter/counter.component';
import { InquiryComponent } from './inquiry/inquiry.component';
import { BeveragesComponent } from './beverages/beverages.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ABCCafeComponent,
    OrderComponent,
    FilterComponent,
    RenderHightDirective,
    CounterComponent,
    InquiryComponent,
    BeveragesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
