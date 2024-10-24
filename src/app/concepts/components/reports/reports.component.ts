import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [],
  template: `
    <div class="bg-warning p-2">
      <h3>Reports</h3>
      <p>You can generate report here</p>
      <button class="btn btn-primary" (click)="handleGenerateReport()">
        Generate Report
      </button>
    </div>
  `,
  styles: ``,
})
export class ReportsComponent {
  // keeping this data in child component
  report = {
    status: 'Report generated successfully',
    id: 123456789,
  };

  // Let's create Custom Event
  // 1. create an object of EventEmitter class
  @Output() reportGenerated = new EventEmitter(); // 2. Make it a custom event with @Output() decorator

  handleGenerateReport() {
    console.log(
      '1. Preparing to send the following data to the parent component'
    );
    console.log(this.report);
    // 3. Let's emit this custom event thru program
    this.reportGenerated.emit(this.report); // 4. send the data while emitting event
  }
}
