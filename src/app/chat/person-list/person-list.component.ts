import { Component } from '@angular/core';
import { Message } from '../types';
import { ChatService } from '../services/ChatService';

@Component({
  selector: 'person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css'],
})
export class PersonListComponent {
  constructor(private events: ChatService) {
    this.events.listen('sendMessage', (message: Message) => {
      this.messages.push(message);
    });
  }

  messages: Message[] = [];

  onClear = () => {
    this.messages = [];
  };
}
