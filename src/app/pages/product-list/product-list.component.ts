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
  moreProduct: number = 5
  filterFlag = false

  constructor(private productService: ProductService, private router: ActivatedRoute, private cd:ChangeDetectorRef) {
    this.router.params.subscribe(({ category }) => {    
      if (this.filterFlag) {
        this.productService.getProductByFilter().subscribe(data => {
          this.products = data.filter((item: any) => {
            if ((item.categoryId._id == category)) {
              return item
            }
          }) 
        })
      }
      else {
        this.filterFlag = true
        this.productService.getCategory(category).subscribe(data => {
          this.onPaginate;
          this.products = data.filter((item: any, index: number) => index < this.moreProduct ? item : null)
          this.cd.detectChanges()
        })
      }
    })
  }





  onPaginate = () => {
    this.moreProduct = this.moreProduct + 4
    this.productService.getProductByCategory().subscribe(data => this.products = data.filter((item: any, index: number) => index < this.moreProduct ? item : null))
  }
}
