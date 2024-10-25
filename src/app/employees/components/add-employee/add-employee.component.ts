import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-employee.component.html',
  styles: ``,
})
export class AddEmployeeComponent {
  // Step 1: Have the form tag equivalent in TS
  addEmployeeForm: FormGroup;

  isSaved = false;

  constructor(private employeesService: EmployeesService) {
    // Step 1 continues....
    this.addEmployeeForm = new FormGroup({
      // Step 2: Have the form field equivalents in TS
      name: new FormControl('', Validators.required), // Step 5: Implement validation
      phone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email ]),
      // Refer HTML for step 3
    });
  }

  handleAddEmployee() {
    // The following data should be sent to service
    console.log(this.addEmployeeForm.value);
    // send the data to the service
    this.employeesService.addEmployee(this.addEmployeeForm.value)
      .subscribe( (response: any) => {
        console.log(response);
        this.isSaved = true;
      })
    // get the response from the service
  }
}
