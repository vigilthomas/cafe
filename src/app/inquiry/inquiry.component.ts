import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.component.html',
  styleUrl: './inquiry.component.css',
})
export class InquiryComponent {
  @Input() cname: string = '';
  @Input() counternum: string = '';
}
