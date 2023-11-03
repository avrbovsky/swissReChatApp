import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent {
  index = 1;

  persons: string[] = [];

  onAddNewPerson = () => {
    this.persons.push(`Person ${this.index}`);
    this.index += 1;
  };
}
