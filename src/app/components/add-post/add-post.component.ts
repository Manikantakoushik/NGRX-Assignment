import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Posts } from 'src/app/Models/Posts-list.model';
import { AppState } from 'src/app/Store/app.state';
import { addPost } from '../posts-list/State/posts.action';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.less']
})
export class AddPostComponent implements OnInit {
  postForm!: FormGroup;
  constructor(private store:Store<AppState>,private route:Router) { }

  ngOnInit(): void {
    this.postForm = new FormGroup({
      // id:new FormControl(null,[Validators.required]),
      title: new FormControl(null,[Validators.required,Validators.minLength(6),
      ]),
      price: new FormControl(null,[
        Validators.required
      ])
    })
 
    
  }
  showDescriptionErrors(){
    const price =this.postForm.get('price');
    if(price?.touched && price.invalid){
      if(price.errors?.['required']){
        return "Price is Required";
      }
    }
    return;
  }

  onAddPost(){
    const post:Posts={
      // id:this.postForm.value.id,
      title:this.postForm.value.title,
      price:this.postForm.value.price
    }
    
    this.store.dispatch(addPost({post}))
    this.route.navigate(['/'])
  }

}
