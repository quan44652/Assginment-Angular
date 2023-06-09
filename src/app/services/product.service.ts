import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from '../common';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
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



  private productByCategory = new BehaviorSubject<any>(null);
  private productByFilter = new BehaviorSubject<any>(null);

  setProductByFilter(products: any) {
    this.productByFilter.next(products);
  }

  getProductByFilter() {
    return this.productByFilter.asObservable();
  }

  setProductByCategory(products: any) {
    this.productByCategory.next(products);
  }

  getProductByCategory() {
    return this.productByCategory.asObservable();
  }

  getProducts(params:string = ""): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8080/api/products' + params)
  }

  getProduct(id: string): Observable<IProduct> {
    return this.http.get<IProduct>('http://localhost:8080/api/products/' + id)
  }

  addProduct(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>('http://localhost:8080/api/products', product, this.httpOptions)
  }

  updateProduct(product: IProduct): Observable<IProduct> {
    return this.http.put<IProduct>('http://localhost:8080/api/products/' + product._id, product, this.httpOptions)
  }

  removeProduct(id: string): Observable<IProduct> {
    return this.http.delete<IProduct>('http://localhost:8080/api/products/' + id, this.httpOptions)
  }

  getAllCategory(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/api/category')
  }

  getCategory(id: string): Observable<any> {
    return this.http.get<any>('http://localhost:8080/api/category/' + id)
  }

  signin(user: any): Observable<any> {
    return this.http.post<any>('http://localhost:8080/api/signin', user)
  }

  signup(user: any): Observable<any> {
    return this.http.post<any>('http://localhost:8080/api/signup', user)
  }

}
