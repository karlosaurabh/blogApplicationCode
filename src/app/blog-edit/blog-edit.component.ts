import { Component, OnInit, OnDestroy } from '@angular/core';

import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit, OnDestroy {

  public currentBlog;
  public possibleCategories = ["Comedy", "Drama", "Action", "Technology"];

  constructor(public blogService: BlogService, public blogHttpService: BlogHttpService, private toastr: ToastrService, public _route: ActivatedRoute, public router: Router) {
   
    console.log("Blog edit constructor called here");
  }// constructor end here

  ngOnInit() {

    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);


    this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(
      data =>{
        console.log(data);
        this.currentBlog = data["data"];

      }, error =>{
        console.log("some error ocurred");
        this.toastr.error("some error ocurred");
        console.log(error.errorMessage);

      }

     )
    


    console.log("Blog edit onInit called here");
    this.toastr.success("blog edit constructor called");
  }

  ngOnDestroy() {
    console.log("Blog edit on destroy called here");
  }

  public editThisBlog(): any {
    this.blogHttpService.editBlog(this.currentBlog.blogId, this.currentBlog).subscribe(
      data => {
        console.log(data);
        alert("Blog is edited successfuly")
        setTimeout(() => {
          this.router.navigate(['/blog',this.currentBlog.blogId])
        }, 1000      )

      }, error => {
        console.log("some error ocurred");
        console.log(error.errorMessage);

      }

    )
  }//editBlog end here

}
