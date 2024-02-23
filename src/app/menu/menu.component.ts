import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
  input,
} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  username: string = '';

  @Output() userAdded = new EventEmitter<string>();

  @ViewChild('nameinput') nameinput!: ElementRef;

  onUserAdded() {
    // console.log(this.nameinput);
    this.userAdded.emit(this.nameinput.nativeElement.value);
  }
}
