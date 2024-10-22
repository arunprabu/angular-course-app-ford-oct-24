import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HomeComponent } from './home/components/home.component';

// decorator
@Component({
  selector: 'app-root', // exposed in a selector
  standalone: true,
  imports: [
    RouterOutlet, 
    HeaderComponent, 
    FooterComponent, 
    HomeComponent],
  templateUrl: './app.component.html', // html
  styleUrl: './app.component.css', // css
})
export class AppComponent {}
