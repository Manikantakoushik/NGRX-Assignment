import { data_BE } from "src/app/Database/database";
import { Posts } from "src/app/Models/Posts-list.model";

export interface PostsState{
    posts:Posts[];
}

export const intialState:PostsState={
    posts:data_BE
}


