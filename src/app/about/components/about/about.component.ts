import { LowerCasePipe, UpperCasePipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [UpperCasePipe, LowerCasePipe, DatePipe],
  template: `
    <div>
      <h1>About Us</h1>
      <p>Pipes Demo</p>
      <p>Utilities to transform information from one format to another</p>
      <p>Without Pipe: {{ randomText }}</p>
      <p>With uppercase Pipe: {{ randomText | uppercase }}</p>
      <p>With lowercase Pipe: {{ randomText | lowercase }}</p>
      <hr />

      <h3>Date Pipe</h3>
      <p>Today is (without Pipe): {{ today }}</p>
      <p>Today is (with Pipe): {{ today | date }}</p>
      <p>
        Today is (with Pipe): {{ today | date : 'hh:mm:ss a on dd/MMMM/yyyy' }}
      </p>
    </div>
  `,
  styles: ``,
})
export class AboutComponent {
  randomText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod';

  today = new Date();
}
