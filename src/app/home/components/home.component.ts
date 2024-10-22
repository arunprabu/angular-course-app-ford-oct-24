import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  template: `<div class="px-4 py-5 my-5 text-center">
    <h1 class="display-5 fw-bold text-body-emphasis">Ng Course App</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">
        Welcome to the Ng Course App. This is a simple app to demonstrate the features/concepts of Angular
      </p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <a routerLink="/employees" class="btn btn-primary btn-lg px-4 gap-3">
          Manage Employees
        </a>
        <a routerLink="/concepts" class="btn btn-outline-secondary btn-lg px-4">
          Learn Concepts
        </a>
      </div>
    </div>
  </div>`,
  styles: ``,
})
export class HomeComponent {}
