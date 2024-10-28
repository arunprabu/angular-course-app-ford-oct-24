import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-list',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './menu-list.component.html',
  styles: ``
})
export class MenuListComponent {
  isLoggedIn = false; 
  
  constructor(private authService: AuthService) {
    console.log('Inside MenuListComponent');
    this.isLoggedIn = this.authService.isAuth();
  }

}
