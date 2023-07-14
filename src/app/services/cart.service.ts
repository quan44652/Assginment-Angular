import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }


  addToCart (cartItem:any):Observable<any> {
    return this.http.post<any>("http://localhost:8080/api/cart",cartItem)
  }

  getToCart () {
    return this.http.get('http://localhost:8080/api/cart')
  }

  removeToCart (id:string) {
    return this.http.delete('http://localhost:8080/api/cart/' + id)
  }
}
