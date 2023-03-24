import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Posts } from '../Models/Posts-list.model';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private dataUrl = `../../assets/database.json`
  constructor(private http: HttpClient) {}
  getposts(): Observable<Posts[]> {
    //  return new Observable((observer) => {
    //     observer.next(data_BE);
    //     observer.complete();
    //   });
    
    return this.http.get<Posts[]>(this.dataUrl).pipe(
      map((data) =>
        data.map((item) => ({ 
          id: item.id,
          title: item.title,
          price: item.price,
        }))
      )
    );
  }
}
