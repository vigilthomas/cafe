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

  itemname: string = '';
  noOfItems=0;

  selectedItemsList: string[] = [];

  onItemsAdded(itemname: string) {
    this.selectedItemsList.push(itemname);
    this.itemname = itemname;
    this.noOfItems= this.selectedItemsList.length
  }

  userList: string[] = [];

  onAddUser(event: string) {
    this.userList.push(event);
  }
}
