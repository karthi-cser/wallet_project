import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

import { JobService } from '../../job.service';

import { TestList } from 'src/app/models/test-list.model';

 import { User } from 'src/app/models/user.model';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.css']
})

export class TestListComponent implements OnInit {
test : TestList[];
 users: User[];
loading:any;

testCount :any;
testCount1 :any;
total_student:any;



panelOpenState = false;


 closeResult: string;


  editForm: FormGroup;
   addForm: FormGroup;

  title: string;





  constructor(private _snackBar: MatSnackBar,private formBuilder: FormBuilder,private router: Router, private jobService: JobService,private modalService: NgbModal) { }

ngOnInit() {

this.loading=true;
this.testCount=1;

    let cid = window.localStorage.getItem("cid");
  //alert("cid",cid);
     this.jobService.testdraft()
      .subscribe( data => {
      
        this.test = data ;
   // console.log( this.test);
   // this.testCount= this.test.length;
      // console.log(this.testCount);


this.loading=false;

       
      });


  }



  editQuestion(q:TestList): void {
    window.localStorage.removeItem("editQuestionId");
    window.localStorage.setItem("editQuestionId", q.id.toString());
    window.localStorage.removeItem("test_name");
    //window.localStorage.setItem("test_name", q.name);
     this.router.navigate(['job/test-update']);
  // alert(q.id.toString());
  };

   addTest(): void {
    this.router.navigate(['/job/test'])
  }; 

  sendto1(): void {
   let test_id = window.localStorage.getItem("testId");
   this.jobService.teststudent(+test_id)
.subscribe( data => {
      
        this.test = data.result ;
       console.log("msg",data);
  }); 
}
sendto(q:TestList): void {
  window.localStorage.removeItem("testId");
  window.localStorage.setItem("testId", q.id.toString());
   this.router.navigate(['job/question/listquestion']);
  }; 

  


open(content) {



 this._snackBar.open('Message archived',   'Undo', {  duration: 1000}    );



  this.addForm = this.formBuilder.group({
      id: [],
      coin: ['', Validators.required], 
      
      to: ['', Validators.required], 
      amount: ['', Validators.required], 
     
      amount_coin: [''],
      description: ['', Validators.required],
       network_fee: ['', Validators.required], 
       
      

     
    });


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




  open2(content1) {


  this.addForm = this.formBuilder.group({
      id: [],
      coin: ['', Validators.required] 
       
    
    });

    this.modalService.open(content1, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason1(reason: any): string {

    
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

 




 onSubmit() {

    this.jobService.send_payment(this.addForm.value)
      .subscribe( data => {
      alert("Send Payment successfully");
console.log(data);
 
     
       // this.router.navigate(['job/question/listquestion']);
      });
  }

receive_address:any;
receive_coin:any;
 onSubmit1() {



    this.jobService.receive_payment(this.addForm.value)
      .subscribe( data => {
      alert("Receive Payment successfully");
console.log(data);
 this.receive_address=data.result.address; 
 this.receive_coin=data.result.coin;

     
        //this.router.navigate(['job/question/listquestion']);
      });
  }



}
