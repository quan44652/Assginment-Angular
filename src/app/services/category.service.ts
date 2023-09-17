import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { ICategory } from '../common';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http: HttpClient) {
    this.userString = localStorage.getItem('user');
    if (this.userString !== null) {
      this.user = JSON.parse(this.userString);
      this.httpOptions.headers = this.httpOptions.headers.set('Authorization', 'Bearer ' + this.user.accsetToken || "");
    }
  }
  user: any;
  userString: any;
  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders()
  };




  getAllCategory(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>('http://localhost:8080/api/category')
  }

  getCategory(id: string): Observable<ICategory> {
    return this.http.get<ICategory>('http://localhost:8080/api/categoryId/' + id)
  }
  addCategory(category: ICategory): Observable<ICategory> {
    return this.http.post<ICategory>('http://localhost:8080/api/category', category,this.httpOptions)
  }
  updateCategory(category: ICategory): Observable<any> {
    return this.http.put<ICategory>('http://localhost:8080/api/category/' + category._id, category,this.httpOptions)
  }
  removeCategory(id: string): Observable<ICategory> {
    return this.http.delete<ICategory>('http://localhost:8080/api/category/' + id, this.httpOptions)
  }
}
