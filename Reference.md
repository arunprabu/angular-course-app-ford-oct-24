Angular
===
  Think in Angular 
  ---------------
    Step 0: Identify the number of components


Building Blocks
====
  Components 
  Directives
  Services
  Interface 
  Pipes 
  Modules


  Guards
  Class 
  Interceptor


====
Components
-------
  ng generate component header 


Concepts
=====
  Routing [DONE]
  Data Binding 
  API Calls
  Auth
  RxJs




Routing 
=====
   7 characteristics of SPA
  ----
    1. Page should NOT refresh [DONE]
    2. URL should be changed  [DONE]
    3. Browser history should be maintained w/o page refresh [DONE]
    4. Retain header and footer without reloading them again and again [DONE]
    5. Main Section should have contextual updates [DONE]
    6. Active Menu should be set [TODO]
    7. Page Title should also be changed  [TODO]

  
  Step 0: 
  -------
    Identify the URLs and for the menus

      Home                            http://localhost:4200/
      Concepts                        http://localhost:4200/concepts
      Employee Management             http://localhost:4200/employees
      About Us                        http://localhost:4200/about
      Contact                         http://localhost:4200/contact

  Step 1: 
  ------
    Let's setup the URLs in menu-list component html 

  Step 2:
  ----
    Create the components for the URLs.

    ng g c home/components/home --inline-style --inline-template
    ng g c concepts/components/concepts --inline-style 
    ng g c employee/components/list-employees --inline-style
    ng g c about/components/about --inline-style --inline-template
    ng g c contact/components/contact --inline-style --inline-template


  Step 3:
    Check the app. url will not be stable. Let's fix it.

    Config the routes in app.routes.ts
  

  Step 4:
  ----
    Check the app. URL will be stable. but the components wont show up in between header and footer.

    in app.comp.html
      <router-outlet></router-outlet>

  Step 5: 
  ----
    Check the app. Main section will show contextual updates. Pages will still refresh.

  Step 6: 
  ---  
    replace <a href="">  with <a routerLink="">

===========
  








Project Structure
=======
  src/  
    app/
      ...
      ...
      ...
      ...
      shared/
        components
          header/
          footer/
          menu-list/
      home/
        components/
          home/
      concepts/
      employees/
      about/
      contact/


Data Binding 
---
  keeping the data in component ts and displaying in component html 
  
  1. Interpolation 
      TS => HTML 
      {{}}

  2. Property Binding
      needed when you are binding the data in an attribute (i.e property)
      TS => HTML 
      []

  3. Event Binding
      TS <== HTML 
      ()

  4. Two Way Binding
      TS <==> HTML 
      [(ngModel)]
      
      Note: can be used in form fields only

  5. Custom Property Binding [DONE]
  
  6. Custom Event Binding [DONE]


======

Cross Component Communication
======
  1. Parent Component to child Component communication [DONE]
      using Custom Property Binding

  2. Child Component to parent Component communication [DONE]
      2.1 using Custom Event Binding 
      2.2 @ViewChild()  [TODO]

  3. Any to Any Component communication 
      3.1 Using  Service,RxJS/Observables and Subscription
      3.2 NgRx 

======

Directives
====
  Special Instructions to the DOM 

  1. Attribute Directives
      routerLink, routerLinkActive, routerLinkActiveOptions, 

  2. Structural Directives
      * Impact in structural layer (HTML)
      *ngIf 
      *ngFor 
      ngSwitch [TODO]

  3. Custom Attribute Directives
      ng g d concepts/directives/colorizer 

  4. Custom Structural Directives [TODO]
      Refer: https://angular.dev/guide/directives/structural-directives#creating-a-structural-directive


===========

Employee Management (CRUD)
---

  1. List Employees (READ)
    http://localhost:4200/employees
    Component: ListEmployeesComponent
    ng g c employees/components/list-employees 
    Http Method: GET
    REST API URL: https://jsonplaceholder.typicode.com/users

  2. Add Employee (CREATE)
    http://localhost:4200/employees/add
    Component: AddEmployeeComponent
    ng g c employees/components/add-employee --inline-style
    Http Method: POST
    REST API URL: https://jsonplaceholder.typicode.com/users

  3. Employee Details (READ)
    http://localhost:4200/employees/1
    http://localhost:4200/employees/45
    Component: EmployeeDetailsComponent
    ng g c employees/components/employee-details --inline-style
    Http Method: GET
    REST API URL: https://jsonplaceholder.typicode.com/users/1

  4. Update Employee (UPDATE)
    http://localhost:4200/employees/1/edit
    ng g c employees/components/update-employee --inline-style
    Component: UpdateEmployeeComponent
    Http Method: PUT 
    REST API URL: https://jsonplaceholder.typicode.com/users/1


  5. Delete Employee (DELETE) [TODO]
    http://localhost:4200/employees/1
    Component: EmployeeDetailsComponent
    Http Method: DELETE
    REST API URL: https://jsonplaceholder.typicode.com/users/1

=====


Angular Forms
-------
  1. Template Driven Forms [NOT RECOMMENDED]
        * build with only htmls 
        * easist type of form 
        * validations can be implemented with attribute directives 
        * Disadvantags: 
          1. not suitable for complex form validations
          2. not suitable for unit testing 

  2. Reactive Forms [RECOMMENDED]
        * build with HTML + TS 
        * easy 
        * validations can be implemented with TS

        * Advantages:
          1. Suitable for complex form validations
          2. Suitable for unit testing


Reactive Forms Tutorial
==========
  Step 0: Have the html form ready 

  Step 1: Have the form tag equivalent in TS 

  Step 2: Have the form field equivalents in TS 

  Step 3: Patch up the form tag with the TS equivalent

  Step 4: Patch up the html form fields with the TS equivalents

  Step 5: Implement validations in TS

  Step 6: Displaying validation related msg in HTML

  Step 7: Work on submission flow





Till angular 16 (ng cli v16.x)
---
  ng new my-app 

  * default angular projects are of module based 
  * components are not standalone by default

After Angular 17  (ng cli v 17.x)
-----
  ng new my-app   
  
   * default angular projects are of standalone components (not module based)
   * however you can work with modules as well




========

## How to have a project with both standalone and feature module based components?

ng new my-app (new project structure without app module - if it is angular 17+ project)

**Step 1:**

Feature Module and Feature Routing Module

 - ng g m users/users --flat
 - ng g m users/users-routing --flat

  
 
**Step 2:**

Afterwards, create the necessary components

 - ng g c users/components/add-user 
 - ng g c users/components/list-users

  

Step 3:

Then, include the above 2 components in users.module.ts

    import { NgModule } from '@angular/core';
    import { UsersRoutingModule } from './users-routing.module';
    import { AddUserComponent } from './components/add-user/add-user.component';
    import { ListUsersComponent } from './components/list-users/list-users.component';
    
    @NgModule({
      declarations: [
        AddUserComponent, // REFER here
        ListUsersComponent, // REFER here
      ],
      imports: [UsersRoutingModule], // Load the routing module here   
    })
 
    export class UsersModule {}

  

Step 4:

Then, let's complete the routing config for this feature

go to users-routing.module.ts

  

Have the following
    // user/users-routing.module.ts
    
    import { NgModule } from '@angular/core';
    
    import { RouterModule, Routes } from '@angular/router';
    
    import { AddUserComponent } from './components/add-user/add-user.component';
    
    import { ListUsersComponent } from './components/list-users/list-users.component';
    
      
    
    const routes: Routes = [
    
    { path: 'list', component: ListUsersComponent }, // routing config
    
    { path: 'add', component: AddUserComponent }, // routing config
    
    { path: '', redirectTo: 'list', pathMatch: 'full' }, // routing config
    
    ];
    
      
    
    @NgModule({
    
    // DO NOT MISS THESE TWO LINES
    
    imports: [RouterModule.forChild(routes)], // registering the routes
    
    exports: [RouterModule],
    
    })
    
    export class UsersRoutingModule {}

  

Step 5:

Lazily load the feature module in app.routes.ts

  
  

    // configure the routes
    
    export const routes: Routes = [
    
    { path: '', component: HomeComponent },
    
    { path: 'about', component: AboutComponent },
    
    { path: 'contact', component: ContactComponent },
    
    {
    
    path: 'users',
    
    // lazy loading a module
    
    loadChildren: () =>
    
    import('./users/users.module').then((m) => m.UsersModule),
    
    },
    
    ];

  

Step 6:

All the setup is done.

**hit the urls**
 - localhost:4200/users/list
 - localhost:4200/users/add


====
Capstone Project 
================
  CRUD Operations
    * has one issue -- CORS issue (tomorrow)

  ====
  Develop the Front end in Angular for the same crud app 
    * Pages 
      1. Home 
          localhost:4200/
      2. Events 
        2.1 List Events 
            localhost:4200/events
        2.2 Add Event (have the form, do the validation, and complete the flow)
            localhost:4200/events/add
        2.3 Event Details 
            localhost:4200/events/1
        2.4 Update Event 
            localhost:4200/events/1/edit
        2.5 Delete Event
            localhost:4200/events/1
      3. About
          localhost:4200/about

      

    Points to remember
    ==================
      * Use bootstrap for UI
      * UI can be styled as per your wish
      * Make it visually better 
      * Make it responsive (mobile, tablet friendly) 
      * Follow the best practices
      * Follow the conventions 
      * code quality should be of 100%



    Peer Review
    ------
      * Review the code and provide comments





