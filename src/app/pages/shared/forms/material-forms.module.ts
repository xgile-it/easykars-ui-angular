import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatesFormComponent } from './dates-form/dates-form.component';
import { PersonalFormComponent } from './personal-form/personal-form.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { TermsFormComponent, NgbdModalContent } from './terms-form/terms-form.component';
import { ResultFormComponent } from './result-form/result-form.component';
import { FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from 'src/app/material.module';



@NgModule({
  declarations: [
    DatesFormComponent,
    PersonalFormComponent,
    PaymentFormComponent,
    TermsFormComponent,
    ResultFormComponent,
    NgbdModalContent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgbModule
  ],
  exports: [
    MaterialModule,
    DatesFormComponent,
    PersonalFormComponent,
    PaymentFormComponent,
    TermsFormComponent,
    ResultFormComponent
  ],
  entryComponents: [
    PersonalFormComponent, NgbdModalContent
  ]
})
export class MaterialFormsModule { }
