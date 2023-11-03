import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldModule,
} from '@angular/material/form-field';

import { ChatComponent } from './chat.component';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonItemComponent } from './person-item/person-item.component';

@NgModule({
  declarations: [
    ChatComponent,
    ChatboxComponent,
    PersonListComponent,
    PersonItemComponent,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' },
    },
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatListModule,
  ],
  exports: [ChatComponent],
})
export class ChatModule {}
