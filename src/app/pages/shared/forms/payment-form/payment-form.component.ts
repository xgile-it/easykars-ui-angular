import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class PaymentFormComponent  {
     // Receive FormGroup instance from the parent 'NewContactComponent'
     @Input() form: FormGroup;

  constructor() { }

}
