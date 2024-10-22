import { Routes } from '@angular/router';
import { HomeComponent } from './home/components/home.component';
import { ConceptsComponent } from './concepts/components/concepts/concepts.component';
import { ListEmployeesComponent } from './employee/components/list-employees/list-employees.component';
import { AboutComponent } from './about/components/about/about.component';
import { ContactComponent } from './contact/components/contact/contact.component';

// config the routes
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'concepts', component: ConceptsComponent },
  { path: 'employees', component: ListEmployeesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];
