import { Component } from '@angular/core';
import { DocumentNavComponent } from "./components/document-nav/document-nav.component";
import { DocumentTableComponent } from "./components/document-table/document-table.component";

@Component({
  selector: 'app-documents',
  standalone: true,
  imports: [DocumentNavComponent, DocumentTableComponent],
  templateUrl: './documents.component.html',
  styleUrl: './documents.component.scss'
})
export class DocumentsComponent {
  documents: Document[] = [];

}
