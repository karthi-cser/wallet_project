import { Component, OnInit , Inject} from '@angular/core';
import {Router} from "@angular/router";

import { JobService } from '../../../job.service';
 import { User } from 'src/app/models/user.model';

import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ListUserComponent implements OnInit {

 dataSource;

  columnsToDisplay = [];
  expandedElement: null;  

  users: User[];
    page = 1;
  pageSize = 4;
collectionSize;
// users.length;

loading:any;

testCount :any;





  constructor(private router: Router, private jobService: JobService,private _snackBar: MatSnackBar) {
  
   }




  ngOnInit() {

 
this.loading=true;
this.testCount=1;

  this.users=[ {id:3}];

    if(!window.localStorage.getItem('token')) {
      this.router.navigate(['login']);
      return;
    }
    let token = localStorage.getItem('token');
  

  
    this.jobService.getUsers1()
      .subscribe( data => {
      
        this.users = data;
        console.log(this.users);
this.collectionSize=this.users.length;

  
   this.testCount= this.users.length;
   this.dataSource = data;

this.columnsToDisplay = ['id','first_name','email',  'created_at','updated_at'];
expandedElement: User; 
       console.log(this.testCount);
window.localStorage.removeItem("students");
    window.localStorage.setItem("students", this.testCount);

this.loading=false;
 
 
        
 

      });
  }
 
/*
 get userslist (): User[] {
 console.log("sss");
  

    return this.users
      .map((user, i) => ({id: i + 1, ...user}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
*/



  deleteUser(user: User): void {
    this.jobService.deleteUser(user.id)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
  };

  editUser(user: User): void {
    window.localStorage.removeItem("editUserId");
    window.localStorage.setItem("editUserId", user.id.toString());
    this.router.navigate(['job/user/edit-user']);
  };

  addUser(): void {
    this.router.navigate(['job/user/add-user']);
  }; 
  addUser1(): void {
    this.router.navigate(['job/user/new-user']);
  }; 
  addUser2(): void {
    this.router.navigate(['job/student']);
  }; 


sendtostatus(id): void {
 
   // alert(id);
     
    this.jobService.changeStatus(+id)
      .subscribe( data => {
       //this.users = data;
              this._snackBar.open("Approved Successfully", "Close", {
      duration: 2000,

      verticalPosition: 'top',
      horizontalPosition: 'center'
    });
this.router.navigate(['job/user/list-user']);
    this.jobService.getUsers1()
      .subscribe( data => {
      
        this.users = data;
        console.log(this.users);
         this.dataSource = data;

this.columnsToDisplay = ['id','first_name','email',  'created_at','updated_at'];
expandedElement: User; 
        });
      });





  }; 
 
}
