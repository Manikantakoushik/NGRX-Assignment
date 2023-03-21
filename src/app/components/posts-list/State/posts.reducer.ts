import { on } from "@ngrx/store";
import { createReducer } from "@ngrx/store";
import { addPost } from "./posts.action";
import { intialState } from "./posts.state";

const _postsReducer = createReducer(intialState,on(addPost,(state,action)=>{
    let post ={...action.post};
    post.id=(state.posts.length+1);
    return {...state,posts:[...state.posts,post],}
}));

export function postsReducer(state:any,action:any){
    return _postsReducer(state,action);
}