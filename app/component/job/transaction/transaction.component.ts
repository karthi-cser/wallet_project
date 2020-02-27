import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

import { JobService } from '../../job.service';

import { TestList } from 'src/app/models/test-list.model';

import { Test } from 'src/app/models/test.model';

import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TransactionComponent implements OnInit {
 dataSource;

  columnsToDisplay = [];
  expandedElement: null;  

test : TestList[];


loading:any;

testCount :any;

  constructor(private formBuilder: FormBuilder,private router: Router, private jobService: JobService) { }

  ngOnInit() {
  this.loading=true;
this.testCount=1;



     this.jobService.testdraft()
      .subscribe( data => {
      
        this.test = data ;
    console.log( this.test);
    this.dataSource = data;

this.columnsToDisplay = ['id', 'coin',  'updated_at','sent_from','received_by','dr'];
expandedElement: TestList;  
 

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

  


sendto(q:TestList): void {
  window.localStorage.removeItem("testId");
  window.localStorage.setItem("testId", q.id.toString());
   this.router.navigate(['job/question/listquestion']);
  }; 


}
