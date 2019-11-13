import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { from } from 'rxjs';

@Component({
  selector: 'app-terms-form',
  templateUrl: './terms-form.component.html',
  styleUrls: ['./terms-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
  
})
export class TermsFormComponent {
   // Receive FormGroup instance from the parent 'NewContactComponent'
   @Input() form: FormGroup;

   constructor(private modalService: NgbModal) {}

   open() {
     const modalRef = this.modalService.open(NgbdModalContent);
     modalRef.componentInstance.name = '1. The Rental Agreement. These Rental Terms and Conditions, the rental document you receive when you are given access to the car you are renting (the "Rental Contract") any additional agreement signed by you, any documents or agreements (or links to on-line documents or agreements) sent to you electronically in connection with your rental, the Privacy Notice, and the return receipt or record (the "Rental Receipt") with computed rental charges together constitute the "Rental Agreement" between yourself and Avis Rent A Car System, LLC, or the independent Avis System Licensee identified on the Rental Contract (“Avis”).';
   }
 }
 @Component({
   selector: 'ngbd-modal-content',
   template: `
   <div class="modal-header">
   <h4 class="modal-title">THESE TERMS AND CONDITIONS CONTAIN A BINDING ARBITRATION CLAUSE AND CLASS ACTION WAIVER THAT 
   IMPACT YOUR RIGHTS ABOUT HOW TO RESOLVE DISPUTES. PLEASE READ THIS PROVISION CAREFULLY.</h4>
   <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
   <span aria-hidden="true">&times;</span>
   </button>
   </div>
   <div class="modal-body">
     <p>Hello, {{name}}!</p>
   </div>
   <div class="modal-footer">
   <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
  </div>
  `,
  })
  export class NgbdModalContent {
    @Input() name;
 
    constructor(public activeModal: NgbActiveModal){}
  }
   
 
