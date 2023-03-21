import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './components/add-post/add-post.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';

const routes: Routes = [{
  path:'',component:PostsListComponent,
  children:[{
    path:'add',component:AddPostComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
