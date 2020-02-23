import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Job } from '../models/job';

import {ApiResponse} from "../models/api.response";

import {Center} from "../models/center.model";
import {Test} from "../models/test.model";
import {TestList} from "../models/test-list.model";


import { User } from '../models/user.model';


import { Observable } from 'rxjs';

const createcategory = "http://saksh.website/vapi/a8/tcreateCategory.php";
const allcategory = "http://saksh.website/vapi/a8/allcategory.php";
const createJob =	"http://localhost:5000/job/create";
const getAllJob = "http://saksh.website/vapi/a8/allcategory.php";
const getSingleJob = "http://localhost:5000/job/details/";
const deleteJob = "http://localhost:5000/job/delete/";
const getUserJob = "http://localhost:5000/job/user";
const getJobsByCategory = "http://localhost:5000/job/category/";
const search = "http://localhost:5000/job/search/";


@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http: HttpClient) { }

  baseUrl: string = 'http://saksh.website/vapi/a8center/';
baseUrl1 = 'https://auth.globo4x.com/laravel/public/api/auth/system/transactions';
baseUrl2 = 'https://auth.globo4x.com/laravel/public/api/auth/system/';
baseUrl3 = 'https://auth.globo4x.com/laravel/public/api/auth/';

  createJob(data) {
      return this.http.post(createJob, data);
  } 

  getAllJob(): Observable<Array<Job>> {
    return this.http.get<Array<Job>>(getAllJob);
  }

  getJob(id): Observable<Job> {
    return this.http.get<Job>(getSingleJob + id);
  }

  getUserJob(): Observable<Array<Job>> {
    return this.http.get<Array<Job>>(getUserJob);
  }

  deleteJob(id) {
    return this.http.delete(deleteJob + id);
  }

  getByCategory(category): Observable<Array<Job>> {
    return this.http.get<Array<Job>>(getJobsByCategory + category);
  }

  //search
  search(query): Observable<Array<Job>> {
    return this.http.get<Array<Job>>(search + query)
  }


 createCategory(data) {
      return this.http.post(createcategory, data);
  } 



 getCategory() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl+'allcategory.php');
  }

 categoryStatus(id:number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl +'categoryStatus.php?id='+ id);
    
  }
teststudent(id:number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl +'teststudent.php?test_id='+ id);
    
  }
  getCategoryById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl +'getCategorybyId.php?id='+ id);
  }

  getCenter1(id:number) : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl+'getCenter.php?category_id='+ id);
  }

 getCenter() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl+'allcenter.php');
  }

   getTest() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl+'alltest.php');
  }


   getTest1() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl+'getTest.php');
  }


    testdraft() : Observable<Array<TestList>> {
    return this.http.get<Array<TestList>>(this.baseUrl1);
  }

    transactions_deposits() : Observable<Array<TestList>> {
    return this.http.get<Array<TestList>>(this.baseUrl2+'transactions_deposits');
  }


 transactions_widthdraws() : Observable<Array<TestList>> {
    return this.http.get<Array<TestList>>(this.baseUrl2+'transactions_widthdraws');
  }
  

 getQuestionById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl +'getQuestionbyId.php?id='+ id);
  }


   getQuestion1(id:number) : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl+'getQuestion.php?test_id='+ id);
  }

 getUsers2() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl+'studentlist.php');
  }
 

createCenter(center: Center): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl3+'changepassword', center);
  }
 
 createTest(test: Test): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl+'createTest.php', test);
  }

  send_payment(test: Test): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl2+'send_payment', test);
  }

  receive_payment(test: Test): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl2+'receive_payment', test);
  }

  centerStatus(id:number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl +'centerStatus.php?id='+ id);

  }

   getCenterById(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl3 +'user');
  }

   updateCenter(center: Center): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl3 +'postprofile', center);
  }

 updatedocument(center: Center): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl3 +'postkycnew', center);
  }

   

  testStatus(id:number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl +'testStatus.php?id='+ id);
    }


 getTestById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl +'getTestbyId.php?center_id='+ id);
  }

TestById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl +'testbyid.php?test_id='+ id);
  }
  
    updateTest(test: Test): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl +'updateTest.php?id='+ test.id, test);
  }
   createUser(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl+'tcreateuser.php', user);
  }

  getUserById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl +'getUserById.php?id='+ id);
  }

   updateUser(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl +'updateUser.php?id='+ user.id, user);
  }

  deleteUser(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl +'tuser.php?id='+ id);
  }

  getUsers1() : Observable<Array<User>>{
    return this.http.get<Array<User>>(this.baseUrl2+'deposits');
  }

getactiveUsers1() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl+'activestudent.php');
  }


gettopUsers1() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl+'topstudent.php');
  }


   getnewUsers() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl+'newstudentlist.php');
  }



   studentStatus(id:number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl +'studentStatus.php?id='+ id);
    
  }
newstudentStatus(id:number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl +'newstudentStatus.php?id='+ id);
    
  }

 getQuestions() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl+'allquestions.php');
  }

    
}
