import {Component} from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'roompopup-dialog',
    templateUrl: './roompopup.component.html',
    
  })
  export class DialogResultExampleDialog {
    pageTitle:string='Create Room';
    constructor(public activeModal: NgbActiveModal) {
    }
  }  