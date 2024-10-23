import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  template: `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ personName }}</h5>
        <p class="card-text">Age: {{ age }}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  `,
  styles: ``,
})
export class ProfileComponent {
  // create variable and make it a custom property
  @Input() personName = 'John';
  @Input() age = 20;
}
