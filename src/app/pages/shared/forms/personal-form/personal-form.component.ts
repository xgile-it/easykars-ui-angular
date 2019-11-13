import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-personal-form',
  templateUrl: './personal-form.component.html',
  styleUrls: ['./personal-form.component.scss']
})
export class PersonalFormComponent  {
     // Receive FormGroup instance from the parent 'NewContactComponent'
    @Input() form: FormGroup;

  constructor() { }

 }
