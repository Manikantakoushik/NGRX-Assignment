import { postsReducer } from "../components/posts-list/State/posts.reducer";
import { PostsState } from "../components/posts-list/State/posts.state";

export interface AppState{
    posts:PostsState;
}

export const appReducer={
    posts:postsReducer
}