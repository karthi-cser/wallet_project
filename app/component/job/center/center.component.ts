import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { JobService } from '../../job.service';


@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private jobService: JobService) { }

  addForm: FormGroup;

  ngOnInit() {
  this.addForm = this.formBuilder.group({
      id: [],
      current_password: ['', Validators.required], 
       new_password: ['', Validators.required],
        confirm_password: ['', Validators.required]
        
     
     
    });

  }

  onSubmit() {
    this.jobService.createCenter(this.addForm.value)
      .subscribe( data => {
      //  this.router.navigate(['job/center-list']);
      });
  }

}
