import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from '../profile/profile.component';
import { ReportsComponent } from '../reports/reports.component';

@Component({
  selector: 'app-concepts',
  standalone: true,
  imports: [FormsModule, ProfileComponent, ReportsComponent],
  templateUrl: './concepts.component.html',
  styles: ``,
})
export class ConceptsComponent {
  // interpolation related
  appName = 'Ng Course App';

  // property binding related
  courseName = 'Angular 17';

  // two way binding related
  courseDuration = '10 Days';

  myAge = 100;

  reportStatusReceived: any = {
    status: '',
    id: ''
  };

  // event binding related
  handleClickMe(event: Event) {
    alert('Clicked');
    console.log(event);
    // TODO: disable the button
    // TODO: change  the button label to Clicked
  }

  // custom event related
  // Received data from child component 
  handleReportGenerated(dataFromChildComponent: any) {
    alert("report generated");
    console.log(dataFromChildComponent);
    this.reportStatusReceived = dataFromChildComponent;
  }
}
