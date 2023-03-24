import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { Posts } from 'src/app/Models/Posts-list.model';
import { PostsService } from 'src/app/Services/posts.service';
import { AppState } from 'src/app/Store/app.state';
import { loadPosts } from './State/posts.action';
import { getPosts } from './State/posts.selector';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.less']
})
export class PostsListComponent implements OnInit {
Post!: Observable<Posts[]>;
  constructor(private postsService:PostsService,private store:Store<AppState>) { }

  ngOnInit(): void {
    this.Post=this.store.select(getPosts);
    this.store.dispatch(loadPosts());
    // this.postsService.getposts().subscribe((data: any)=>{
    //   this.Post=data;
    // });
  }

}
