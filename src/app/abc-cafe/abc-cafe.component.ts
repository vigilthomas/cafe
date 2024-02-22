import { Component } from '@angular/core';

@Component({
  selector: 'app-abc-cafe',
  templateUrl: './abc-cafe.component.html',
  styleUrl: './abc-cafe.component.css',
})
export class ABCCafeComponent {
  products = [
    {
      id: 1,
      name: 'Iced Coffee',
      price: 20,
      status: 'available',
      type: 'drinks',
      img: '/assets/icedcoffee.jpg',
    },
    {
      id: 2,
      name: 'Tea',
      price: 10,
      status: 'available',
      type: 'drinks',
      img: '/assets/tea.jpg',
    },
    {
      id: 3,
      name: 'Donuts',
      price: 15,
      status: 'unavailable',
      type: 'foods',
      img: '/assets/donuts.jpg',
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
      name: 'Burger',
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
  ];

  getTotalproducts() {
    return this.products.length;
  }
  getDrinkproducts() {
    return this.products.filter((products) => products.type === 'drinks')
      .length;
  }
  getFoodProducts() {
    return this.products.filter((products) => products.type === 'foods').length;
  }

  productCountRadioButton: string = 'all';

  onFilteredRadioButtonChanged(data: string) {
    this.productCountRadioButton = data;
    console.log(data);
  }
  searchText: string = '';

  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
    console.log(this.searchText);
  }
}
