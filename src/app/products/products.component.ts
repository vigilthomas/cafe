import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  products=[
  {id: 1,name: "Coffee",price: 2.50},
  {id: 2,name: "Tea",price: 2.00 },
  {id: 3,name: "Pastry",price: 1.50},
  {id: 4,name: "Sandwich",price: 3.00},
  {id: 5,name: "Salad",price: 4.00}
];
}
