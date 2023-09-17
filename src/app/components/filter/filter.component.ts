import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  constructor(private productService:ProductService) {}
filter = [
  {
    id:1,
    name:"Mới cập nhập",
    params: "?_sort=createdAt&_order=desc"
  },
  {
    id:2,
    name:"Cũ nhất",
    params: "?_sort=createdAt&_order=asc"
  },
  {
    id:3,
    name:"Giá cao nhất",
    params: "?_sort=priceNew&_order=asc"
  },
  {
    id:4,
    name:"Giá thấp nhất",
    params: "?_sort=priceNew&_order=desc"
  },

]

onClick(params:string) {
this.productService.getProducts(params).subscribe((data) => {
  this.productService.setProductByFilter(data)  
})

}
}
