import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployee } from '../models/iemployee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';
  // you need to include  provideHttpClient() inside providers in app.config.ts

  constructor(private http: HttpClient) {}

  // 1. get the request from component
  getEmployees(): Observable<IEmployee[]> {
    console.log('Inside getEmployees');
    // 2. send the request to the REST api
    // 2.1 What's the REST API URL? apiUrl
    // 2.2 What's the HTTP Method? GET
    // 2.3 What's the REST API Client Tool? HttpClient
    return this.http.get<IEmployee[]>(this.apiUrl);
    // 3. get the response from the REST api
    // 4. return the response to the component
  }

  addEmployee(formData: any) {
    console.log(formData);

    // 2. send the data to the REST api
    // 2.1 What's the REST API URL? apiUrl
    // 2.2 What's the HTTP Method? POST
    // 2.3 What's the REST API Client Tool? HttpClient
    return this.http.post(this.apiUrl, formData);
  }

  getEmployeeById(id: any) {
    console.log('Inside getEmployeeById');
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}
