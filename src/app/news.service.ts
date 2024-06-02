import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(private http: HttpClient) { }

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  getNews(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  createPost(postData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, postData);
  }

  updatePost(Id: number, newData: any): Observable<any> {
    const url = `${this.apiUrl}/${Id}`;
    return this.http.put(url, newData);
  }

  deletePost(postId: number): Observable<any> {
    const url = `${this.apiUrl}/${postId}`;
    return this.http.delete(url);
  }

}
