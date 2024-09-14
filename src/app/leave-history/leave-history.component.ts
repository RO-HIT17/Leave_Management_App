import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule

@Component({
  selector: 'app-leave-history',
  standalone: true,  // Standalone components need this
  imports: [CommonModule],  // Add CommonModule to imports
  templateUrl: './leave-history.component.html',
  styleUrls: ['./leave-history.component.css']
})
export class LeaveHistoryComponent {
  leaves = [
    { type: 'Sick Leave', duration: 3, status: 'Approved' },
    { type: 'Casual Leave', duration: 2, status: 'Pending' },
  ];
}
