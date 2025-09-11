import { Routes } from '@angular/router';
import { MarkdownDisplay } from './pages/worklog/markdown-display';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/home/welcome/welcome.routes').then(m => m.WELCOME_ROUTES) },
  { path: 'worklog', component: MarkdownDisplay }
];
