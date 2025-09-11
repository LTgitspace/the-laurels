import { Component, OnInit, signal } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-markdown-display',
  standalone: true,
  imports: [MarkdownModule],
  templateUrl: './markdown-display.html',
  styleUrl: './markdown-display.css'
})
export class MarkdownDisplay implements OnInit {
  content = signal<string>('Loading markdown...');
  private readonly mdPath = '/week1.md'; // adjust path if needed

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get(this.mdPath, { responseType: 'text' }).subscribe({
      next: raw => {
        const cleaned = this.preprocess(raw);
        this.content.set(cleaned.trim());
      },
      error: () => {
        this.content.set('Failed to load markdown file: ' + this.mdPath);
      }
    });
  }

  private preprocess(src: string): string {
    // Remove YAML front matter
    let out = src.replace(/^---[\s\S]*?---\s*/m, '');
    // Remove Hugo shortcodes like {{% notice %}} ... {{% /notice %}}
    out = out.replace(/{{[%<][^}]*[%>]}}/g, '');
    return out;
  }
}
