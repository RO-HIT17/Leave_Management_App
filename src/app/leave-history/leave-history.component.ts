import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-leave-history',
  standalone: true,  
  imports: [CommonModule],  
  templateUrl: './leave-history.component.html',
  styleUrls: ['./leave-history.component.css']
})
export class LeaveHistoryComponent {
  leaves = [
    { type: 'Sick Leave', duration: 3, status: 'Approved' },
    { type: 'Casual Leave', duration: 2, status: 'Pending' },
  ];
}
