import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

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

  sendMessage() {
    console.log('Message envoyé');
    // Logique d'envoi du message
  }

  closeForm() {
    console.log('Formulaire fermé');
    // Logique pour fermer le formulaire
  }
}
