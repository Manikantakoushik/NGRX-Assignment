import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { data_BE } from '../Database/database';
import { Posts } from '../Models/Posts-list.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }
  getposts():Observable<Posts[]>{
   return new Observable((observer) => {
      observer.next(data_BE);
      observer.complete();
    });
  }
}
