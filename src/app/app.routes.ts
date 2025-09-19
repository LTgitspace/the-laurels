import { Routes } from '@angular/router';
import { Wlweek1 } from './pages/worklog/week1/wlweek1';
import { Wlweek2 } from './pages/worklog/week2/wlweek2';
import { Wlweek3 } from './pages/worklog/week3/wlweek3';
import { Wlweek4 } from './pages/worklog/week4/wlweek4';
import { Wlweek5 } from './pages/worklog/week5/wlweek5';
import { Wlweek6 } from './pages/worklog/week6/wlweek6';
import { Wlweek7 } from './pages/worklog/week7/wlweek7';
import { Wlweek8 } from './pages/worklog/week8/wlweek8';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/home/welcome/welcome.routes').then(m => m.WELCOME_ROUTES) },
  { path: 'worklogweek1', component: Wlweek1 },
  {path: 'worklogweek2', component: Wlweek2 },
  {path: 'worklogweek3', component: Wlweek3 },
  {path: 'worklogweek4', component: Wlweek4 },
  {path: 'worklogweek5', component: Wlweek5 },
  {path: 'worklogweek6', component: Wlweek6 },
  {path: 'worklogweek7', component: Wlweek7 },
  {path: 'worklogweek8', component: Wlweek8 },
];
