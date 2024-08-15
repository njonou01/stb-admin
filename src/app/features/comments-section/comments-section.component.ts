import { Component, Input } from '@angular/core';
import { CommentComponent } from '../comment/comment.component';
import { RedButtonComponent } from '../../atoms/buttons/red-button/red-button.component';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-comments-section',
  standalone: true,
  imports: [CommentComponent,RedButtonComponent,CommonModule],
  templateUrl: './comments-section.component.html',
  styleUrl: './comments-section.component.scss'
})
export class CommentsSectionComponent {
  @Input() comments?:any[];

}
