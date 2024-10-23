import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-concepts',
  standalone: true,
  imports: [FormsModule, ProfileComponent],
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

  // event binding related
  handleClickMe(event: Event) {
    alert('Clicked');
    console.log(event);
    // TODO: disable the button
    // TODO: change  the button label to Clicked
  }
}
