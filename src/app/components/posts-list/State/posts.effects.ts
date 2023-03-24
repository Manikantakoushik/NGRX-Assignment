import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { mergeMap, map, of } from "rxjs";
import { PostsService } from "src/app/Services/posts.service";
import { AppState } from "src/app/Store/app.state";
import { loadPosts, loadPostsSuccess } from "./posts.action";

@Injectable()
export class PostEffects{
    constructor(private action$:Actions,private postsService:PostsService,private store:Store<AppState>){}

    loadPosts$ = createEffect(()=>{
        return this.action$.pipe(
            ofType(loadPosts),
            mergeMap((action)=>{
              return this.postsService.getposts().pipe(
                map((posts)=>{
                    return loadPostsSuccess({posts})
                })
              )
            })
        )
    })



}


