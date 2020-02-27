import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';

 import {CenterComponent} from "./component/job/center/center.component";

 import {CenterUpdateComponent} from "./component/job/center-update/center-update.component";

 import {TestComponent} from "./component/job/test/test.component";
 import {TestListComponent} from "./component/job/test-list/test-list.component";

import { AuthGuard } from './authentication/guards/auth.guard';

 import {TestdraftComponent} from "./component/job/testdraft/testdraft.component";

import {ListUserComponent} from "./component/job/user/list-user/list-user.component";
import { KycDocumentComponent } from './component/job/kyc-document/kyc-document.component' 
import { TransactionComponent } from './component/job/transaction/transaction.component' ;
import { WithdrawComponent } from './component/job/withdraw/withdraw.component' ;
import { DepositComponent } from './component/job/deposit/deposit.component' ;
import { UserProfileComponent } from './component/job/user-profile/user-profile.component';
import { ChangePasswordComponent } from './component/job/change-password/change-password.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
 
  
 
  

  

  { path: 'test-list', component: TestListComponent, canActivate: [AuthGuard]},
  { path: 'center', component: CenterComponent, canActivate: [AuthGuard]},


    { path: 'center-update', component: CenterUpdateComponent, canActivate: [AuthGuard]},

     { path: 'test', component: TestComponent, canActivate: [AuthGuard]},
  

   { path: 'testdraft', component: TestdraftComponent , canActivate: [AuthGuard]},


{ path: 'user/list-user', component: ListUserComponent , canActivate: [AuthGuard]},
{ path: 'kyc-document', component: KycDocumentComponent , canActivate: [AuthGuard]},



   { path: 'transaction', component: TransactionComponent , canActivate: [AuthGuard]},


{ path: 'deposit', component: DepositComponent , canActivate: [AuthGuard]},
{ path: 'withdraw', component: WithdrawComponent , canActivate: [AuthGuard]},
{ path: 'user-profile', component: UserProfileComponent , canActivate: [AuthGuard]},
{ path: 'change-password', component: ChangePasswordComponent , canActivate: [AuthGuard]},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
