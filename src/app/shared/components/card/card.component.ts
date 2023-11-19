import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent {
  @Input() id!: number;
  @Input() title!: string;
  @Input() score!: number;
  @Input() img!: string;
  @Input() path!: string;
}
