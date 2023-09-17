import { Component,ChangeDetectorRef  } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products: any = []
  moreProduct: number = 1
  filterFlag = false
  category!:any ;

  constructor(private productService: ProductService, private router: ActivatedRoute, private cd:ChangeDetectorRef) {
    this.router.params.subscribe(({ category }) => {          
        this.productService.getCategory(category).subscribe(data => {
          this.onPaginate();
          this.category= category
          this.products = data.filter((item: any, index: number) => index < this.moreProduct ? item : null)
          this.cd.detectChanges()
        })
      
    })
  }




  onPaginate = () => {
    this.moreProduct = this.moreProduct + 1
    this.productService.getProductByCategory().subscribe(data => {
      if(data) {
        this.products = data.filter((item: any, index: number) => index < this.moreProduct ? item : null)
      }
    })
  }


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
    this.productService.getProducts(params).subscribe((data:any) => {
        this.products = data.filter((item:any) => item.categoryId._id == this.category ? item : null 
        )
    }) 
  }
}
