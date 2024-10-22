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

  5. Custom Property Binding
  
  6. Custom Event Binding

