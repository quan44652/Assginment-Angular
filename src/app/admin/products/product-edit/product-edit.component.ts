import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ICategory, IProduct, IPromotion } from 'src/app/common';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { PromotionService } from 'src/app/services/promotion.service';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {
  promotions!:IPromotion[]
  category!:ICategory[]
  productCurrent!:any
  productNew!:IProduct

  constructor (private promotionService :PromotionService,private productService:ProductService,private categoryService :CategoryService,
     private toastr:ToastrService, private router:Router,private activeRouter:ActivatedRoute, private formBuilder:FormBuilder) {
    this.promotionService.getAllPromotion().subscribe((data:IPromotion[]) => this.promotions = data)
    this.categoryService.getAllCategory().subscribe((data) => this.category = data)
    this.activeRouter.params.subscribe(({id}) => this.productService.getProduct(id).subscribe((data:any) => {
      this.productCurrent = data
      this.formValue.patchValue({
        sticker: data?.sticker,
        name: data.name,
        priceNew: data.priceNew,
        priceOld: data?.priceOld,
        image: data.image,
        categoryId: data.categoryId,
        promotionId: data.promotionId.map((item:IPromotion) => item._id),
      })
    }))
  }

  formValue = this.formBuilder.group (
    {
      name:"",
      priceNew:0,
      priceOld: 0,
      sticker:"",
      categoryId:"",
      image:"",
      promotionId: []
    }
  )

  onSubmit() {
    this.productNew = {
      _id: this.productCurrent._id,
      sticker: this.formValue.value.sticker || "",
      name: this.formValue.value.name || "",
      priceNew: this.formValue.value.priceNew || 0,
      priceOld: this.formValue.value.priceOld || 0,
      image: this.formValue.value.image || "",
      categoryId: this.formValue.value.categoryId || "",
      promotionId: this.formValue.value.promotionId || [],
    }
      this.productService.updateProduct(this.productNew).subscribe((data:any) => {
        if(data.error) {
          this.toastr.warning(data.error,"Cảnh báo")
        }
        else {
          this.toastr.success(data.message,"Chúc mừng")
  this.router.navigate(['/admin/products'])
        }
      }
      )
  }
}
