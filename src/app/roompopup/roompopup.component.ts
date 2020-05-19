import {Component} from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UnoService } from '../services/uno-service.service';


@Component({
    selector: 'roompopup-dialog',
    templateUrl: './roompopup.component.html',
    
  })
  export class DialogResultExampleDialog {
    
    pageTitle:string='Create Room';
    
    constructor(public activeModal: NgbActiveModal,
                private unoService: UnoService) {
    }

    createRoom() {
      this.unoService.createGame();
      this.activeModal.dismiss();
    }
  }  