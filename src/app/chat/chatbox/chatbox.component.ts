import { Component, Input } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';

import { ChatService } from '../services/ChatService';

@Component({
  selector: 'chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css'],
})
export class ChatboxComponent {
  constructor(private events: ChatService) {}

  chatForm = new FormGroup({
    message: new FormControl('', Validators.required),
  });

  @Input()
  personName!: string;

  onSend = (_: any, formDirective: FormGroupDirective) => {
    this.events.emit('sendMessage', {
      message: this.chatForm.get('message')?.value,
      sender: this.personName,
    });

    formDirective.resetForm();
    this.chatForm.reset();
  };
}
