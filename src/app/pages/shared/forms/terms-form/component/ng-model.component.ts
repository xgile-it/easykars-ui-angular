import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ng-modal',
  templateUrl: './ng-modal.component.html'
})

export class NgbdModalContent {
  constructor(
    private _NgbActiveModal: NgbActiveModal
  ) { }

  get activeModal() {
    return this._NgbActiveModal;
  }
}
