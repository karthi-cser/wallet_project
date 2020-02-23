import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

import { JobService } from '../../job.service';

import { TestList } from 'src/app/models/test-list.model';

import { Test } from 'src/app/models/test.model';

import {animate, state, style, transition, trigger} from '@angular/animations';









@Component({
  selector: 'app-testdraft',
  templateUrl: './testdraft.component.html',
  styleUrls: ['./testdraft.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class TestdraftComponent implements OnInit {
 dataSource;

  columnsToDisplay = [];
  expandedElement: null;  

test : TestList[];

  //this.test=[{id:3}];



loading:any;

testCount :any;
  constructor(private formBuilder: FormBuilder,private router: Router, private jobService: JobService) { 


  }

  ngOnInit() {
this.loading=true;
this.testCount=1;



     this.jobService.testdraft()
      .subscribe( data => {
      
        this.test = data ;
    console.log( this.test);
    this.dataSource = data;

this.columnsToDisplay = ['id', 'coin',  'created_at','updated_at','status'];
expandedElement: TestList;  
 

this.loading=false;

       
      });

  }



 //dataSource = this.test;
  //columnsToDisplay = ['Id', 'Description', 'Coin', 'Cr', 'Dr', 'Created At','Updated At'];


  //expandedElement: Test[]  ;



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
