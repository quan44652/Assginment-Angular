import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { IPromotion } from '../common';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

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

  getAllPromotion ():Observable<IPromotion[]> {
    return this.http.get<IPromotion[]>('http://localhost:8080/api/promotion')
  }
  getPromotion (id:string):Observable<IPromotion> {
    return this.http.get<IPromotion>('http://localhost:8080/api/promotion/'+id)
  }
  addPromotion(promotion:IPromotion):Observable<IPromotion> {
    return this.http.post<IPromotion>('http://localhost:8080/api/promotion',promotion,this.httpOptions)
  }
  updatePromotion(promotion:IPromotion):Observable<IPromotion> {
    return this.http.put<IPromotion>('http://localhost:8080/api/promotion/'+promotion._id,promotion, this.httpOptions)
  }
  removePromotion(id:string) {
    return this.http.delete('http://localhost:8080/api/promotion/'+id,this.httpOptions)
  }
}
