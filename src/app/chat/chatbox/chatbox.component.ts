import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css'],
})
export class ChatboxComponent {
  chatForm = new FormGroup({
    message: new FormControl('', Validators.required),
  });

  onSend = (_: any, formDirective: FormGroupDirective) => {
    // TODO: Send message

    formDirective.resetForm();
    this.chatForm.reset();
  };
}
