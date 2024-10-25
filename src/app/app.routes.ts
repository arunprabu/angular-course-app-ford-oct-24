import { Routes } from '@angular/router';
import { HomeComponent } from './home/components/home.component';
import { ConceptsComponent } from './concepts/components/concepts/concepts.component';
import { ListEmployeesComponent } from './employees/components/list-employees/list-employees.component';
import { AboutComponent } from './about/components/about/about.component';
import { ContactComponent } from './contact/components/contact/contact.component';
import { AddEmployeeComponent } from './employees/components/add-employee/add-employee.component';
import { EmployeeDetailsComponent } from './employees/components/employee-details/employee-details.component';
import { UpdateEmployeeComponent } from './employees/components/update-employee/update-employee.component';

// config the routes
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'concepts', component: ConceptsComponent },
  {
    path: 'employees', children: [
      { path: '', component: ListEmployeesComponent },
      { path: 'add', component: AddEmployeeComponent },
      { path: '1', component: EmployeeDetailsComponent },
      { path: '1/edit', component: UpdateEmployeeComponent },
    ],
  },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];
