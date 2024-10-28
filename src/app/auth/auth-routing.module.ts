import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';

// This is the file similar to app.routes.ts 
// to have your urls configured
const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [
    // register the routes here
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
