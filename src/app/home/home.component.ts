import { Component, OnInit , OnDestroy } from '@angular/core';



/*============= service ===============*/
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';

/*============= toastr ===============*/
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit , OnDestroy{

  public allBlogs;

  constructor(public blogService:BlogService, public blogHttpService: BlogHttpService, public toastr:ToastrService ) { 
    console.log("Home component constructor called here");
    
  }

  ngOnInit() {
    console.log("Home component OnInit called here");
    this.toastr.success('Hello world!', 'Home component constructor!');
    
    this.allBlogs = this.blogHttpService.getAllBlog().subscribe(
      data =>{
       
        console.log(data);
        this.allBlogs = data["data"];

      }, error =>{
        console.log("some error ocurred");
        console.log(error.errorMessage);

      }

     )
     console.log(this.allBlogs);
  }

  ngOnDestroy(){
    console.log("Home ng destroy is called here");
  }

}
