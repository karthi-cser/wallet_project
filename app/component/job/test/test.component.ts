import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators,NgModel} from "@angular/forms";
import {Router} from "@angular/router";
import { JobService } from '../../job.service';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

public show:boolean = false;
  public buttonName:any = 'Show';
  closeResult: string;

  constructor(private formBuilder: FormBuilder,private router: Router, private jobService: JobService,private modalService: NgbModal) { }

  addForm: FormGroup;

  ngOnInit() {
  let editQuestionId = window.localStorage.getItem("cid");
  this.addForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required], 
      
      duration_hour: ['', Validators.required], 
      duration_minute: ['', Validators.required], 
     
      description: [''],
      question: ['1', Validators.required],
       marks: ['4', Validators.required], 
       
 marks1: [''], 
       negativemarks:['1'],


       center_id:[editQuestionId],
       

     
    });



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


toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }

  onSubmit() {



    this.jobService.createTest(this.addForm.value)
      .subscribe( data => {
      alert("Test added successfully"+data.result.id);
console.log(data);
 
      window.localStorage.setItem("testId", data.result.id);
        this.router.navigate(['job/question/listquestion']);
      });
  }

}
