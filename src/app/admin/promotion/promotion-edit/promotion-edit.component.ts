import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { IPromotion } from 'src/app/common';
import { PromotionService } from 'src/app/services/promotion.service';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-promotion-edit',
  templateUrl: './promotion-edit.component.html',
  styleUrls: ['./promotion-edit.component.css']
})
export class PromotionEditComponent {
  promotionCurrent!:IPromotion;
  promotionNew!:IPromotion
constructor(private activeRouter:ActivatedRoute,private toastr:ToastrService, private formBuilder:FormBuilder,private router:Router, private promotionService:PromotionService) {
this.activeRouter.params.subscribe(({id}) => {
  this.promotionService.getPromotion(id).subscribe((data:any) => {  
    this.promotionCurrent = data.promotion
    this.formValue.patchValue(data.promotion)
  })
}
)
}

formValue = this.formBuilder.group({
  name: ""
})

onSubmit() {
  this.promotionNew = {
    _id: this.promotionCurrent._id,
    name: this.formValue.value.name || ""
  }
    this.promotionService.updatePromotion(this.promotionNew).subscribe((data:any) => {
      if(data.error) {
        this.toastr.warning(data.error,"Cảnh báo")
      }
      else {
        this.toastr.success(data.message,"Chúc mừng")
this.router.navigate(['/admin/promotion'])
      }
    }
    )
}
}
