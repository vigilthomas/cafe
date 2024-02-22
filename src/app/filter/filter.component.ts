import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent {
  cname: string = 'ANN';

  @Input('allitems') all: number = 0;
  @Input() drinks: number = 0;
  @Input() foods: number = 0;

  selectedRadioButtonValue: string = 'all';

  @Output()
  filterRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();

  onRadioButtonSelectionChanged() {
    this.filterRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
  }
}
