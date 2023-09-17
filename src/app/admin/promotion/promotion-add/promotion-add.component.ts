import { Component } from '@angular/core';
import { IPromotion } from 'src/app/common';
import { PromotionService } from 'src/app/services/promotion.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-promotion-add',
  templateUrl: './promotion-add.component.html',
  styleUrls: ['./promotion-add.component.css']
})
export class PromotionAddComponent {

  constructor(private promotionService:PromotionService,private toastr:ToastrService, private router:Router) {}

  promotion:IPromotion = {
    name: ""
  }

  onSubmit () {
    this.promotionService.addPromotion(this.promotion).subscribe((data:any) => {

      if(data.error) {
        this.toastr.warning(data.error,"Cảnh báo")
      }
      else {
        this.toastr.success(data.message,"Chúc mừng")
    this.router.navigate(['/admin/promotion'])
      }
})
  }
}
