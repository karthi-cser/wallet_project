import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/authentication/auth.service';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-naviagtion',
  templateUrl: './naviagtion.component.html',
  styleUrls: ['./naviagtion.component.css']
})
export class NaviagtionComponent implements OnInit {
 closeResult: string;

opened: boolean;
panelOpenState:boolean;
 center_name:any;
  constructor(
    public authService: AuthService,
    private router: Router,private modalService: NgbModal
  ) {  }

  ngOnInit() {

   let c_name = window.localStorage.getItem("c_name");
   //alert(c_name);
   this.center_name=c_name;
this.opened=true;
  }

  logout() {

    this.authService.logout();
  
    this.router.navigate([ '/login' ]);
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
