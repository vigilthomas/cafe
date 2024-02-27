import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductListService {
  constructor() {}
  products = [
    {
      id: 1,
      name: 'Cappuccino',
      price: 40,
      status: 'available',
      type: 'drinks',
      img: '/assets/cappuccino.jpg',
    },
    {
      id: 2,
      name: 'Donuts',
      price: 15,
      status: 'available',
      type: 'foods',
      img: '/assets/donuts.jpg',
    },
    {
      id: 3,
      name: 'Tea',
      price: 10,
      status: 'unavailable',
      type: 'drinks',
      img: '/assets/tea.jpg',
    },

    {
      id: 4,
      name: 'Sandwich',
      price: 30,
      status: 'available',
      type: 'foods',
      img: '/assets/sandwich.jpg',
    },

    {
      id: 5,
      name: 'Chicken Burger',
      price: 70,
      status: 'available',
      type: 'foods',
      img: '/assets/burger.jpg',
    },

    {
      id: 6,
      name: 'Coco Cola',
      price: 20,
      status: 'unavailable',
      type: 'drinks',
      img: '/assets/cola.jpg',
    },
    {
      id: 7,
      name: 'Iced Coffee',
      price: 20,
      status: 'available',
      type: 'drinks',
      img: '/assets/icedcoffee.jpg',
    },
    {
      id: 8,
      name: 'Veg Burger',
      price: 70,
      status: 'unavailable',
      type: 'foods',
      img: '/assets/vegburger.jpg',
    },
    {
      id: 9,
      name: 'Mojito',
      price: 20,
      status: 'unavailable',
      type: 'drinks',
      img: '/assets/mojito.jpg',
    },
    {
      id: 10,
      name: 'Cocktail',
      price: 20,
      status: 'available',
      type: 'drinks',
      img: '/assets/cocktail.jpg',
    },
  ];

  
}
