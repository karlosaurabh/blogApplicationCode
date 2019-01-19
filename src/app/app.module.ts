import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/*========= router =================*/
import {RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

/*======== Component =================*/
import { AppComponent } from './app.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';

/*============= form ===============*/
import {FormsModule } from '@angular/forms';

/*============= toastr ===============*/
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

/*============= service ===============*/
import { BlogService } from './blog.service';
import { BlogHttpService } from './blog-http.service';

@NgModule({
  declarations: [
    AppComponent,
    BlogCreateComponent,
    BlogEditComponent,
    BlogViewComponent,
    HomeComponent,
    PageNotFoundComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'edit/:blogId', component: BlogEditComponent },
      { path: 'blog/:blogId', component: BlogViewComponent },
      { path: 'create', component: BlogCreateComponent },
      { path: '**', component: PageNotFoundComponent }
    ])
  ],
  providers: [BlogService, BlogHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
