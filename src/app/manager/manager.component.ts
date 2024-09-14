import { Component } from '@angular/core';

@Component({
  selector: 'app-manager',
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
