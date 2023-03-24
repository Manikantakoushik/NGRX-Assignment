import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostsState } from "./posts.state";

const getPostsState=createFeatureSelector<PostsState>('posts');

export const getPosts=createSelector(getPostsState,(state)=>{
    return state.posts;
})

export const getPostById=createSelector(getPostsState,(state:any,props:any)=>{
        const post=state.posts.find((item:any) =>{    
            console.log("selector:",item);
                    
           return  String(item.id) === String(props.id);  
        } )
    // return state.posts.find((post:any)=>post.id === Number(props.id));
    return post;
})


