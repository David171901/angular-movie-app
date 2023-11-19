import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface CustomItem {
  id: number;
  name: string;
}

@Component({
  selector: 'app-checkbox-list',
  templateUrl: './checkbox-list.component.html'
})
export class CheckboxListComponent<T extends CustomItem> {
  @Input() items: T[] = [];
  @Output() itemChange: EventEmitter<{ itemId: number, event: Event }> = new EventEmitter();


  constructor() { }

  onItemChange(itemId: number, event: Event): void {
    this.itemChange.emit({ itemId, event });
  }
}
