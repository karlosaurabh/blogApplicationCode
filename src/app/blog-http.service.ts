import { Injectable } from '@angular/core';

import {HttpClient, HttpErrorResponse} from '@angular/common/http';

/*=========== observable code =============*/

import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';



@Injectable({
  providedIn: 'root'
})

export class BlogHttpService {


  public currentBlog;
  public allBlogs;
  public baseUrl ="https://blogapp.edwisor.com/api/v1/blogs/";
  public myApi= "ZmZmOGU4ODBiMzQ0N2JhOGQ3ZDEwZjkxNDZmNmE0MDdjMWNmMDQxOWFjMmQ0ZWUyZmE1YTBhZDY5NTkwZGQzNWIwNTAxNjYzMDg3MjVhOWEyZjE5YzY1MDMxZGY3YzM0NjZmNTlkZTliOTViYWJmY2Q0NjA3MGE1OTE4YWM0MjI5NA==";



  constructor(public _http:HttpClient) {
    console.log("Service constructor called");
   }

   public getAllBlog():any {
   let myResponse = this._http.get(this.baseUrl + 'all'+'?authToken=' +this.myApi);
    return myResponse;
   }

   public getSingleBlogInformation(currentBlogId): any {
    let myResponse = this._http.get(this.baseUrl + 'view/'+ currentBlogId +'?authToken='+this.myApi);
    return myResponse;
    
  
  }//getSingleBlogInformation


  public createBlog(blogData):any {
    let myResponse = this._http.post(this.baseUrl + 'create' + '?authToken=' + this.myApi, blogData);
    return myResponse;
  }//createBlog


  public deleteBlog(currentBlogId):any{
    let data ={};
    console.log("delete");
    console.log(data);
    let myResponse = this._http.post(this.baseUrl + currentBlogId +  '/delete' + '?authToken=' + this.myApi, data);
    return myResponse;
  }//deleteBlog


  public editBlog(currentBlogId, blogData):any{
    let myResponse = this._http.put(this.baseUrl + currentBlogId +  '/edit' + '?authToken=' + this.myApi, blogData);
    return myResponse;
  }//editThisBlog

   ngOnInit() {
    console.log("Service OnInit called here");
  }

}

