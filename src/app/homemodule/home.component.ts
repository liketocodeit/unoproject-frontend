import {Component} from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DialogResultExampleDialog } from '../roompopup/roompopup.component';

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
      const modalRef = this.modalService.open(DialogResultExampleDialog);
      modalRef.componentInstance.name = 'World';
       
}
}


