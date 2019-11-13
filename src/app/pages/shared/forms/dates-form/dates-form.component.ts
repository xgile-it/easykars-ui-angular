import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-dates-form',
  templateUrl: './dates-form.component.html',
  styleUrls: ['./dates-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
  
})
export class DatesFormComponent {
  // Receive formData object from the parent 'NewContactComponent'
  @Input() form: FormGroup;

  constructor() { }
 
}
