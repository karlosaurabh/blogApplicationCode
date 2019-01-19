import { Injectable } from '@angular/core';

import {HttpClient, HttpErrorResponse} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class BlogService {

  public currentBlog;
  public allBlogs = [
    {
      "blogId": "1",
      "lastModified":"2017-10-20T12:20:47.8547Z",
      "created": "2017-10-20T12:20:47.854Z",
      "tags":[],
      "category":"Comedy",
      "isPublished":true,
      "views":0,
      "bodyHtml":"this is blog body",
      "description":"this is blog 1 description",
      "title":"This is blog1"
    },
    {
      "blogId": "2",
      "lastModified":"2017-10-20T12:20:47.8547Z",
      "created": "2017-10-20T12:20:47.854Z",
      "tags":[],
      "category":"Comedy",
      "isPublished":true,
      "views":0,
      "bodyHtml":"this is blog body",
      "description":"this is blog 2 description",
      "title":"This is blog2"
    },
    {
      "blogId": "3",
      "lastModified":"2017-10-20T12:20:47.8547Z",
      "created": "2017-10-20T12:20:47.854Z",
      "tags":[],
      "category":"Comedy",
      "isPublished":true,
      "views":0,
      "bodyHtml":"this is blog body",
      "description":"this is blog 3 description",
      "title":"This is blog3"
    }
  ]
  constructor() {
    console.log("Service constructor called");
   }

   public getAllBlog():any {
     return this.allBlogs;
   }

   public getSingleBlogInformation(currentBlogId): any {

    for(let blog of this.allBlogs){
      if(blog.blogId == currentBlogId){
        this.currentBlog = blog;
      }
    }
    console.log(this.currentBlog);
    return (this.currentBlog);
  }

   ngOnInit() {
    console.log("Service OnInit called here");
  }

}
