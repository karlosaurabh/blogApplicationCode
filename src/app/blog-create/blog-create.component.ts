import { Component, OnInit, OnDestroy } from '@angular/core';

import {BlogHttpService} from '../blog-http.service';

import {Router} from '@angular/router';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit, OnDestroy  {

  constructor(public blogHttpService:BlogHttpService, public router:Router,) { 
    console.log("blog create component constructor called here"); 
   
  }
  ///these are the body parameters
    public blogTitle: string;
    public blogBodyHtml: string;
    public blogDescription: string;
    public blogCategory: string;
    public possibleCategories = ["Comedy", "Drama", "Action", "Technology" ]

public createBlog(): any{
   let blogData = {
     title : this.blogTitle,
     description : this.blogDescription,
     blogBody: this.blogBodyHtml,
     category: this.blogCategory
   }
   console.log(blogData);
   this.blogHttpService.createBlog(blogData).subscribe(
     data =>{
       console.log("Blog created");
       console.log(data);
      // this.router.navigateByUrl('home');

      setTimeout(()=>{
        this.router.navigate(['/blog',data.data.blogId]);
      },1000)
     
      },
      error=>{
        console.log("some error occured");
        console.log(error.errorMessage);

      }, complete =>{
        alert("blog created successfuly");
      }
   )
}


  ngOnInit() {
    console.log("blog create ngOnInit called here");
  }

  ngOnDestroy(){
    console.log("blog create destory called here");
  }

}
