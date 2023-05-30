import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http:HttpClient) { }


  private productByCategory = new BehaviorSubject<any>(null);

  setProductByCategory (products: any) {
      this.productByCategory.next(products);
  }

  getProductByCategory () {
  console.log(this.productByCategory);
  return this.productByCategory.asObservable();
  }

  getProducts (): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8080/api/products')
  }

  getProduct (id:string): Observable<any> {
    return this.http.get<any>('http://localhost:8080/api/products/' + id)
  }

  getAllCategory ():Observable<any> {
    return this.http.get<any>('http://localhost:8080/api/category')
  }

  getCategory (id:string):Observable<any> {
    return this.http.get<any>('http://localhost:8080/api/category/' + id)
  }

  signin (user:any):Observable<any> {
    return this.http.post<any>('http://localhost:8080/api/signin',user)
  }

  signup (user:any):Observable<any> {
    return this.http.post<any>('http://localhost:8080/api/signup',user)
  }

}
