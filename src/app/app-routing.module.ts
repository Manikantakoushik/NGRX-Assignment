import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './components/add-post/add-post.component';
import { DetailPostComponent } from './components/detail-post/detail-post.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';

const routes: Routes = [{
  path:'',component:PostsListComponent,
  children:[{
    path:'add',component:AddPostComponent
  },{
    path:'edit/:id',component:EditPostComponent
  }]
},{
  path:'product-list/:id',component:DetailPostComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
