import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../common';
@Injectable({
  providedIn: 'root'
})
export class UserService {

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


  getAllUser ():Observable<IUser[]> {
    return this.http.get<IUser[]>('http://localhost:8080/api/users')
  }
  licensing (id:string):Observable<any> {
    return this.http.put('http://localhost:8080/api/licensing/'+id,{}, this.httpOptions)
  }
  removeUser (id:string):Observable<any> {
    return this.http.delete('http://localhost:8080/api/licensing/'+id, this.httpOptions)
  }
}
