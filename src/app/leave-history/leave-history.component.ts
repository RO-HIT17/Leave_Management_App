import { Component } from '@angular/core';

@Component({
  selector: 'app-leave-history',
  templateUrl: './leave-history.component.html',
  styleUrls: ['./leave-history.component.css']
})
export class LeaveHistoryComponent {
  leaves = [
    { type: 'Sick Leave', duration: 3, status: 'Approved' },
    { type: 'Casual Leave', duration: 2, status: 'Pending' },
  ];
}
