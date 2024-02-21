import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  cname: string = 'ANN';

  products = [
    {
      id: 1,
      name: 'Coffee',
      price: 20,
      status: 'available',
      img: 'https://source.unsplash.com/random/?coffee',
    },
    {
      id: 2,
      name: 'Tea',
      price: 10,
      status: 'available',
      img: 'https://source.unsplash.com/random/?tea',
    },
    {
      id: 3,
      name: 'Pastry',
      price: 15,
      status: 'unavailable',
      img: 'https://source.unsplash.com/random/?pastry',
    },
    {
      id: 4,
      name: 'Sandwich',
      price: 30,
      status: 'available',
      img: 'https://source.unsplash.com/random/?sandwich',
    },
    {
      id: 5,
      name: 'Salad',
      price: 40,
      status: 'unavailable',
      img: 'https://source.unsplash.com/random/?salad',
    },
    {
      id: 6,
      name: 'Burger',
      price: 70,
      status: 'available',
      img: 'https://source.unsplash.com/random/?chicken%20burger',
    },
    {
      id: 7,
      name: 'Hotdog',
      price: 90,
      status: 'available',
      img: 'https://source.unsplash.com/random/?hotdog',
    },
    {
      id: 8,
      name: 'Fresh Lime',
      price: 20,
      status: 'unavailable',
      img: 'https://source.unsplash.com/random/?fresh%20juice',
    },
  ];
}
