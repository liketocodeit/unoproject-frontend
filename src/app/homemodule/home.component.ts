import {Component} from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateRoomComponent } from '../roompopup/roompopup.component';
import {JoinroomComponent} from '../joinroom/joinroom.component';

@Component({
 selector:'uno-home',
 templateUrl:'./home.component.html'
})
export class HomeComponent{
     
      pageTitle:string='Welcome to play UNO';
      buttonOne:string='Create Room';
      buttonTwo:string='Join Room';
      
      constructor(private modalService: NgbModal) {}

      openDialog() {
            const modalRef = this.modalService.open(CreateRoomComponent);
            modalRef.componentInstance.name = 'World'; 
      }

      joinRoomDialog(){
            const modalRef = this.modalService.open(JoinroomComponent);
            modalRef.componentInstance.name = 'Hello'; 
      }
}



