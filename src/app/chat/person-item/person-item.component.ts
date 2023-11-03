import { Component, Input } from '@angular/core';
import { Message } from '../types';

@Component({
  selector: 'person-item',
  templateUrl: './person-item.component.html',
  styleUrls: ['./person-item.component.css'],
})
export class PersonItemComponent {
  @Input()
  message!: Message;
}
