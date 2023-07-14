import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ICategory, IPromotion } from 'src/app/common';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { PromotionService } from 'src/app/services/promotion.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {
  promotions!:IPromotion[]
  category!:ICategory[]
  constructor (private promotionService :PromotionService,private productService:ProductService,private categoryService :CategoryService, private toastr:ToastrService, private router:Router) {
    this.promotionService.getAllPromotion().subscribe((data:IPromotion[]) => this.promotions = data)
    this.categoryService.getAllCategory().subscribe((data) => this.category = data)
  }

product = {
  sticker:"",
  name:"",
  priceNew:0,
  priceOld: 0,
  categoryId:"",
  image:"",
  promotionId: []
}

onSubmit () {  
  this.productService.addProduct(this.product).subscribe((data:any) => {
    
    if(data.error) {
      this.toastr.warning(data.error,"Cảnh báo")
    }
    else {
      this.toastr.success(data.message,"Chúc mừng")
  // this.router.navigate(['/admin/products'])
    }
})
}
}
