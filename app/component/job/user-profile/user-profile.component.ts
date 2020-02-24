import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";

import { JobService } from '../../job.service';
import { CenterUpdate } from 'src/app/models/center-update.model';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

center: CenterUpdate; 
  editForm: FormGroup

  constructor(private formBuilder: FormBuilder,private router: Router, private jobService: JobService,private _snackBar: MatSnackBar) { }

 ngOnInit() {




   // let editQuestionId = window.localStorage.getItem("cid");
   // alert(editQuestionId);
    //if(!editQuestionId) {
      //alert("Invalid action.")
      //this.router.navigate(['job/category-list']);
    //  return;
   // }
   // alert(editQuestionId);



    this.editForm = this.formBuilder.group({
      id: [''],                             
      first_name: [''],email: [''],mobile: [''],country: [''],address1: [''],address2: [''],state: [''],
       last_name: [''] ,email_verified_at:[''],created_at:[''],updated_at:[''],district:[''],house_no:[''],street:[''],apartment_number:[''],zip_code:[''],images:[''],city:[''],roll:[''],status:['']
    
    });
    this.jobService.getCenterById()
      .subscribe( data => {
        this.editForm.setValue(data);

      });
  }


onSubmit() {
	  console.log(this.editForm.value);
    this.jobService.updateCenter(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          if(data.status === 200) {
          this._snackBar.open("Added Successfully", "Close", {
      duration: 2000,

      verticalPosition: 'top',
      horizontalPosition: 'center'
    });
           // alert(' Center updated successfully.');
            this.router.navigate(['job/center-list']);
          }else {
            alert(data.message);
          }
        },
        error => {
          alert(error);
        });
  }
}
