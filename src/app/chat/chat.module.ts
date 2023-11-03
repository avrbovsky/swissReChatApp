import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [ChatComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule, MatDividerModule],
  exports: [ChatComponent],
})
export class ChatModule {}
