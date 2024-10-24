import { Component } from '@angular/core';
import { MenuListComponent } from '../menu-list/menu-list.component';

@Component({
  selector: 'app-footer', // element selector
  standalone: true,
  imports: [MenuListComponent],
  template: `
    <footer class="text-center">
      <hr />
      <app-menu-list></app-menu-list>
      <p class="copyright">Copyright {{copyrightYear}} | Arun</p>
    </footer>
  `,
  styles: `
    /* component specific styles */
    .copyright {
      font-size: 0.8rem;
      color: red;
    }
  `,
})
export class FooterComponent {
  // ideal place for your variables and methods 
  copyrightYear: number = 2024;

}
