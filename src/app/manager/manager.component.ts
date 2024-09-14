import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule

@Component({
  selector: 'app-manager',
  standalone: true,  // Standalone components need this
  imports: [CommonModule],  // Add CommonModule to imports
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent {
  requests = [
    { employee: 'John Doe', leaveType: 'Sick Leave', duration: 3, status: 'Pending' },
    { employee: 'Jane Smith', leaveType: 'Annual Leave', duration: 5, status: 'Approved' }
  ];

  approveRequest(index: number) {
    this.requests[index].status = 'Approved';
  }
}
