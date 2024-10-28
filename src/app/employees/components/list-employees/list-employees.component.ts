import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmployeesService } from '../../services/employees.service';
import { CommonModule } from '@angular/common';
import { IEmployee } from '../../models/iemployee';

@Component({
  selector: 'app-list-employees',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './list-employees.component.html',
  styles: ``,
})
export class ListEmployeesComponent implements OnInit {
  employees: IEmployee[] = [];

  // Connect to the Service using dep injection
  constructor(private employeeService: EmployeesService) {
    console.log('1. INSIDE LISTEMPLOYEES CONSTRUCTOR');
  }

  ngOnInit(): void {
    // LifeCycle Hook
    // called whenever the component is coming into view
    // similar to onload of JS
    // ideal place for you to make api calls
    console.log('2. INSIDE ngOnInit');

    // 1. Send the request to the service
    this.employeeService.getEmployees().subscribe((response: IEmployee[]) => {
      console.log(response);
      this.employees = response;
    });
    // 2. Get the response from the service
  }
}
