import { on } from "@ngrx/store";
import { createReducer } from "@ngrx/store";
import { addPost, loadPostsSuccess, updatePost } from "./posts.action";
import { intialState } from "./posts.state";

const _postsReducer = createReducer(intialState,on(addPost,(state,action)=>{
    let post ={...action.post};
    post.id=(state.posts.length+1);
    return {...state,posts:[...state.posts,post],}
}),on(updatePost,(state,action)=>{
    let updated_post=state.posts.map((post)=>{
       return String(post.id) === String(action.post.id) ? action.post:post;
    })
    return {...state,posts:updated_post}
}),on(loadPostsSuccess,(state,action)=>{
    return {
        ...state,
        posts:action.posts
    }
}));

export function postsReducer(state:any,action:any){
    return _postsReducer(state,action);
}