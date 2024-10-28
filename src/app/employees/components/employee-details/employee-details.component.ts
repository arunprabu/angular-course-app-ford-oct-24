import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './employee-details.component.html',
  styles: ``
})
export class EmployeeDetailsComponent implements OnInit {
  employeeId: any;
  employee: any;

  constructor(private employeeService: EmployeesService, private route: ActivatedRoute) {
    // Reading the URL param
    this.employeeId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    // similar to onload of JS
    console.log('Inside ngOnInit');
    // 1. Send the request to the service
    this.employeeService.getEmployeeById(this.employeeId)
      .subscribe((response: any) => {
        console.log(response);
        this.employee = response;
      });
    // 2. Get the response from the service
  }
}
