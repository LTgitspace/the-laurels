import { Component } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-markdown-display',
  standalone: true,
  imports: [MarkdownModule],
  templateUrl: './markdown-display.html',
  styleUrl: './markdown-display.css'
})
export class MarkdownDisplay {}
