import { Component, OnInit , OnDestroy, OnChanges } from '@angular/core';

import {ActivatedRoute, Router} from '@angular/router';

import {BlogService} from '../blog.service';
import { BlogHttpService } from '../blog-http.service';

import { ToastrService } from 'ngx-toastr';
import {Location} from '@angular/common';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  providers:[Location]
})
export class BlogViewComponent implements OnInit , OnDestroy {
  public currentBlog;
  
  /*=========== to get the id which i have to see =========*/

  

    constructor( private _router:ActivatedRoute, public router:Router, public blogService:BlogService, public blogHttpService: BlogHttpService, private toastr:ToastrService, private location:Location) {
    console.log("Blog view component called here");
    
   }
   
    // showSuccess() {
    //   this.toastr.success('Hello world!', 'Toastr fun!');
    // }
  ngOnInit() {
   
    let myBlogId = this._router.snapshot.paramMap.get('blogId');
    console.log(myBlogId);

    this.currentBlog = this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(
      data =>{
        console.log(data);
        this.currentBlog = data["data"];

      }, error =>{
        console.log("some error ocurred");
        this.toastr.error("some error ocurred");
        console.log(error.errorMessage);

      }

     )
    
   

    console.log("Blog view ngOnInit called here");

    console.log(this.currentBlog);
  }

 public deleteBlog():any{
 this.blogHttpService.deleteBlog(this.currentBlog.blogId).subscribe(
  data =>{
    console.log(data);
    alert("Blog is deleted successfuly")
    setTimeout(()=>{
      this.router.navigate(['/home'])
    },1000)

  }, error =>{
    console.log("some error ocurred");
    console.log(error.errorMessage);

  }

 )
  }// deleteBlog end

  public getToPreviousPage():any{
    this.location.back();
  }
 

  ngOnDestroy(){
    console.log("on destroy blog view is called");
  }
  

}
