import { Component } from '@angular/core';

@Component({
  selector: 'app-leave-request',
  templateUrl: './leave-request.component.html',
  styleUrls: ['./leave-request.component.css']
})
export class LeaveRequestComponent {
  // You can define properties and methods here for the leave request form
  submitRequest() {
    alert('Leave request submitted');
  }
}
