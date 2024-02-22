import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { ABCCafeComponent } from './abc-cafe/abc-cafe.component';
import { OrderComponent } from './order/order.component';
import { FilterComponent } from './filter/filter.component';
import { BannerComponent } from './banner/banner.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    ABCCafeComponent,
    OrderComponent,
    FilterComponent,
    BannerComponent,
    SearchComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
