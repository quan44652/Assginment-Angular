import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
constructor(private productService:ProductService) {

}

products:any = []

moreProduct:number = 5

ngOnInit () {
  this.productService.getProductByCategory().subscribe(data => this.products = data.filter((item:any,index:number) => index < this.moreProduct ? item : null))
}

onPaginate = () => {
  console.log(this.moreProduct);
  this.moreProduct = this.moreProduct + 4
  this.productService.getProductByCategory().subscribe(data => this.products = data.filter((item:any,index:number) => index < this.moreProduct ? item : null))
}
}
