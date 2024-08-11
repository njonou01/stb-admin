import { Component } from '@angular/core';
import { DocumentNavComponent } from "../documents/components/document-nav/document-nav.component";
import { DocumentTableComponent } from "../documents/components/document-table/document-table.component";
import { MessageConversationComponent } from "../../features/message-conversation/message-conversation.component";

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [DocumentNavComponent, DocumentTableComponent, MessageConversationComponent],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.scss'
})
export class MessagesComponent {

}
