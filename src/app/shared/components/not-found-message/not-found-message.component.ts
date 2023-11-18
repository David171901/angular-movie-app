import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-not-found-message',
  templateUrl: './not-found-message.component.html'
})
export class NotFoundMessageComponent {
  @Input() title: string = 'Item not found';
  @Input() message: string = '';
  @Input() searchTerm: string = '';
}
