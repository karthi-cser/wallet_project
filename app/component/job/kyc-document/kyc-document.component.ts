import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators,NgModel} from "@angular/forms";
import {Router} from "@angular/router";
import { JobService } from '../../job.service';
import {first} from "rxjs/operators";
import { TestList } from 'src/app/models/test-list.model';
import { User } from 'src/app/models/user.model';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-kyc-document',
  templateUrl: './kyc-document.component.html',
  styleUrls: ['./kyc-document.component.css']
})
export class KycDocumentComponent implements OnInit {
   addForm: FormGroup;
   test : TestList[];
 users: User[];
   editForm: FormGroup;
   closeResult;
files: File[] = [];

  constructor(private formBuilder: FormBuilder,private router: Router, private jobService: JobService,private modalService: NgbModal) { }

  ngOnInit() {
  }


open(content) {

 
    this.editForm = this.formBuilder.group({
      id: [''],                             
      first_name: [''],email: [''],mobile: [''],country: [''],address1: [''],address2: [''],state: [''],
       last_name: [''] ,email_verified_at:[''],created_at:[''],updated_at:[''],city:[''],district:[''],house_no:[''],street:[''],apartment_number:[''],zip_code:[''],images:[''],roll:[''],status:[''],dob:['']
    
    });
    this.jobService.getCenterById()
      .subscribe( data => {
        this.editForm.setValue(data);

      });
  


    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }


  open2(content1) {

 
    this.editForm = this.formBuilder.group({
      id: [''],                             
      first_name: [''],email: [''],mobile: [''],country: [''],address1: [''],address2: [''],state: [''],
       last_name: [''] ,email_verified_at:[''],created_at:[''],updated_at:[''],city:[''],district:[''],house_no:[''],street:[''],apartment_number:[''],zip_code:[''],images:[''],roll:[''],status:[''],dob:['']
    
    });
    this.jobService.getCenterById()
      .subscribe( data => {
        this.editForm.setValue(data);

      });
  


    this.modalService.open(content1, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

open3(content3) {

 
    this.editForm = this.formBuilder.group({
      id: [''],                             
      first_name: [''],email: [''],mobile: [''],country: [''],address1: [''],address2: [''],state: [''],
       last_name: [''] ,email_verified_at:[''],created_at:[''],updated_at:[''],city:[''],district:[''],house_no:[''],street:[''],apartment_number:[''],zip_code:[''],images:[''],roll:[''],status:[''],dob:['']
    
    });
    this.jobService.getCenterById()
      .subscribe( data => {
        this.editForm.setValue(data);

      });
  


    this.modalService.open(content3, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }


open4(content4) {

 
    this.editForm = this.formBuilder.group({
      id: [''],                             
      first_name: [''],email: [''],mobile: [''],country: [''],address1: [''],address2: [''],state: [''],
       last_name: [''] ,email_verified_at:[''],created_at:[''],updated_at:[''],city:[''],district:[''],house_no:[''],street:[''],apartment_number:[''],zip_code:[''],images:[''],roll:[''],status:[''],dob:['']
    
    });
    this.jobService.getCenterById()
      .subscribe( data => {
        this.editForm.setValue(data);

      });
  


    this.modalService.open(content4, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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

onSubmit() {
	  console.log(this.editForm.value);
    this.jobService.updateCenter(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          if(data.status === 200) {
            alert(' Center updated successfully.');
            //this.router.navigate(['job/center-list']);
          }else {
            alert(data.message);
          }
        },
        error => {
          alert(error);
        });
  }
onSubmit4() {
	  console.log(this.editForm.value);
    this.jobService.updatedocument(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          if(data.status === 200) {
            alert(' Center updated successfully.');
            //this.router.navigate(['job/center-list']);
          }else {
            alert(data.message);
          }
        },
        error => {
          alert(error);
        });
  }
onSelect(event) {
  console.log(event);
  this.files.push(...event.addedFiles);
}
 
onRemove(event) {
  console.log(event);
  this.files.splice(this.files.indexOf(event), 1);
}
}
