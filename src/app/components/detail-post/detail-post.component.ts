import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Posts } from 'src/app/Models/Posts-list.model';
import { getPostById } from '../posts-list/State/posts.selector';

@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.less']
})
export class DetailPostComponent implements OnInit {
  post!:Posts;
  id!:number;
  constructor(private route:ActivatedRoute,private store: Store) { }

  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      this.id=params['id'];
      this.store.select(getPostById,{id:this.id}).subscribe((data)=>{        
        this.post=data;
      })
    })
  }

}
