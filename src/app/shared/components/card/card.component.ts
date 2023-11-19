import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() id!: number;
  @Input() title!: string;
  @Input() score!: number;
  @Input() img!: string;
}
