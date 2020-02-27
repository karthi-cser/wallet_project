import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DropdownDirective } from './component/shared/naviagtion/dropdown.directive';
import { CollapseDirective } from './component/shared/naviagtion/collapse.directive';

import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './authentication/auth.service';
import { ToastrModule  } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtInterceptorService } from './jwt-interceptor.service';
import { NaviagtionComponent } from './component/shared/naviagtion/naviagtion.component';
import { FooterComponent } from './component/shared/footer/footer.component';



//import { MatSliderModule } from '@angular/material/slider';

import { TestComponent } from './component/job/test/test.component';
import { CenterComponent } from './component/job/center/center.component';
import { JobService } from './component/job.service';



import { TestListComponent } from './component/job/test-list/test-list.component';
import { CenterUpdateComponent } from './component/job/center-update/center-update.component';


import { ListUserComponent } from './component/job/user/list-user/list-user.component';



 import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
 import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TestdraftComponent } from './component/job/testdraft/testdraft.component';

import { NgxSpinnerModule } from "ngx-spinner"; 

import {MatSnackBar} from '@angular/material/snack-bar';


import { KycDocumentComponent } from './component/job/kyc-document/kyc-document.component';
import { TransactionComponent } from './component/job/transaction/transaction.component';
import { WithdrawComponent } from './component/job/withdraw/withdraw.component';
import { DepositComponent } from './component/job/deposit/deposit.component'; 


import { NgxDropzoneModule } from 'ngx-dropzone';



import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import { UserProfileComponent } from './component/job/user-profile/user-profile.component';
import { ChangePasswordComponent } from './component/job/change-password/change-password.component';
import { MylibrarylistComponent } from './mylibrarylist/mylibrarylist.component';
import { GloballibrarylistComponent } from './globallibrarylist/globallibrarylist.component';
import { ApiDocumentComponent } from './component/job/api-document/api-document.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NaviagtionComponent,
    DropdownDirective,
    CollapseDirective,
    FooterComponent,
    
    CenterComponent,

    TestComponent,

    TestListComponent,
    CenterUpdateComponent,

    ListUserComponent,
    TestdraftComponent,
    KycDocumentComponent,
    TransactionComponent,
    WithdrawComponent,
    DepositComponent,
    UserProfileComponent,
    ChangePasswordComponent,
    MylibrarylistComponent,
    GloballibrarylistComponent,
    ApiDocumentComponent,
   

   
    
  
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule,
    CKEditorModule,NgbModule,
    NgxSpinnerModule,MatSliderModule,MatTableModule,NgxDropzoneModule,
    




      MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,

  ],
  providers: [
    AuthService,
    JobService,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
