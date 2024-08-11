import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-message-conversation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message-conversation.component.html',
  styleUrl: './message-conversation.component.scss'
})

export class MessageConversationComponent {
  accounts: string[] = ['Compte 1', 'Compte 2', 'Compte 3'];
  selectedAccount: string = 'Sélectionner un compte';
  object: string = '';
  message: string = '';
  isFormVisible = true;


  closeForm() {
    this.isFormVisible = false;
  }



  sendMessage() {
    console.log('Message envoyé');
    // Logique d'envoi du message
  }
}
