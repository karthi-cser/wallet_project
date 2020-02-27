import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm', {static: false}) loginForm: NgForm;
  user;

  constructor(
    private authService : AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  signIn() {
    this.authService
      .login(this.loginForm.value)
      .subscribe((data) => {
console.log("token",data);

        localStorage.setItem('token', data['access_token']);


        //localStorage.setItem('name', data['email']['name'])
      window.localStorage.removeItem("c_name");
    //window.localStorage.setItem("c_name", data.user.name);



     window.localStorage.removeItem("roll");
    

    window.localStorage.setItem("roll",data['user']['roll']    );

   alert(data['user']['roll']);


if(data['user']['roll']==10){


        this.router.navigate(['/job/user/list-user' ])


}if(data['user']['roll']==0)
{
  this.router.navigate([ '/job/test-list' ])
}



        
      });
  }

}
