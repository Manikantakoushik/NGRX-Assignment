import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Posts } from 'src/app/Models/Posts-list.model';
import { AppState } from 'src/app/Store/app.state';
import { updatePost } from '../posts-list/State/posts.action';
import { getPostById } from '../posts-list/State/posts.selector';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.less']
})
export class EditPostComponent implements OnInit {
  postForm!: FormGroup;
  id!:number;
  post!:Posts;
  constructor(private store:Store<AppState>,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
   
    this.route.params.subscribe((params)=>{
      this.id=params['id'];
      this.store.select(getPostById,{id:this.id}).subscribe((data)=>{
        this.post = data;
        this.createForm();
      })
    })



  }

  createForm(){
    this.postForm = new FormGroup({
      title: new FormControl(this.post.title,[Validators.required,Validators.minLength(6),
      ]),
      price: new FormControl(this.post.price,[
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

  onUpdatePost(){
    if(!this.postForm.valid){
      return
    }
    const title=this.postForm.value.title;
    const price=this.postForm.value.price;
    const post:Posts={
      id:this.id,
      title,price
    }
    this.store.dispatch(updatePost({ post}));
    this.router.navigate(['/'])
     
  }

}
