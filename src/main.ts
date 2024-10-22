import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// angular apps are bootstrapped with AppComponent
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

// Note: bootstrapped components can't be reused
