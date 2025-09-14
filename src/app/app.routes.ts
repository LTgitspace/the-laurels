import { Routes } from '@angular/router';
import { Wlweek1 } from './pages/worklog/week1/wlweek1';
import { Wlweek2 } from './pages/worklog/week2/wlweek2';
import { Wlweek3 } from './pages/worklog/week3/wlweek3';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/home/welcome/welcome.routes').then(m => m.WELCOME_ROUTES) },
  { path: 'worklogweek1', component: Wlweek1 },
  {path: 'worklogweek2', component: Wlweek2 },
  {path: 'worklogweek3', component: Wlweek3 },
];
