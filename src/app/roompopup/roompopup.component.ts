import {Component} from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UnoService } from '../services/uno-service.service';


@Component({
    selector: 'roompopup-dialog',
    templateUrl: './roompopup.component.html',
    
  })
  export class CreateRoomComponent {
    
    pageTitle:string='Create Room';

    gameName: String;
    playerName: String;
    
    constructor(public activeModal: NgbActiveModal,
                private unoService: UnoService) {
    }

    createRoom() {
      let payload = {
        "playerName": this.playerName,
        "gameName": this.gameName
      }
      this.unoService.createGame(payload);
      this.activeModal.dismiss();
    }
  }  