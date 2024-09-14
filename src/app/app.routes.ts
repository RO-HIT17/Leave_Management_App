import { Routes } from '@angular/router';
import { LeaveRequestComponent } from './leave-request/leave-request.component';
import { LeaveHistoryComponent } from './leave-history/leave-history.component';
import { ManagerComponent } from './manager/manager.component';

export const routes: Routes = [
  { path: 'leave-request', component: LeaveRequestComponent },
  { path: 'leave-history', component: LeaveHistoryComponent },
  { path: 'manager', component: ManagerComponent },
  { path: '', redirectTo: '/leave-request', pathMatch: 'full' }
];
