import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-leave-request',
  standalone: true,  
  imports: [CommonModule],  
  templateUrl: './leave-request.component.html',
  styleUrls: ['./leave-request.component.css']
})
export class LeaveRequestComponent {
  employeeName: string = '';
  leaveType: string = '';
  startDate: string = '';
  endDate: string = '';
  noOfDays: number = 0;
  reason: string = '';
  attachment: File | null = null;

  onSubmit() {
    // Handle form submission
    console.log({
      employeeName: this.employeeName,
      leaveType: this.leaveType,
      startDate: this.startDate,
      endDate: this.endDate,
      noOfDays: this.noOfDays,
      reason: this.reason,
      attachment: this.attachment
    });

    // You can add further code here to handle the file upload if needed
  }

  calculateDays() {
    if (this.startDate && this.endDate) {
      const start = new Date(this.startDate);
      const end = new Date(this.endDate);
      if (end >= start) {
        const timeDiff = Math.abs(end.getTime() - start.getTime());
        this.noOfDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)) + 1;
      } else {
        this.noOfDays = 0;
      }
    }
  }

  onFileChange(event: any) {
    this.attachment = event.target.files[0] || null;
  }
}