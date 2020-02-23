import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

import { JobService } from '../../job.service';

import { TestList } from 'src/app/models/test-list.model';

import { Test } from 'src/app/models/test.model';

import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css'],
   animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class WithdrawComponent implements OnInit {

dataSource;

  columnsToDisplay = [];
  expandedElement: null;  

test : TestList[];

  //this.test=[{id:3}];



loading:any;

testCount :any;


  constructor(private formBuilder: FormBuilder,private router: Router, private jobService: JobService) { }

  ngOnInit() {

   this.loading=true;
this.testCount=1;



     this.jobService.transactions_widthdraws()
      .subscribe( data => {
      
        this.test = data ;
    console.log( this.test);
    this.dataSource = data;

this.columnsToDisplay = ['id', 'coin',  'created_at','updated_at','status'];
expandedElement: TestList;  
 

this.loading=false;

       
      });
  }

}
