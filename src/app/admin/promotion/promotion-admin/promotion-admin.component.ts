import { Component } from '@angular/core';
import { faTrash,faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { IPromotion } from 'src/app/common';
import { PromotionService } from 'src/app/services/promotion.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-promotion-admin',
  templateUrl: './promotion-admin.component.html',
  styleUrls: ['./promotion-admin.component.css']
})
export class PromotionAdminComponent {
  promotions!:IPromotion[];
  constructor(private promotionService:PromotionService, private toastr:ToastrService) {
    this.promotionService.getAllPromotion().subscribe((data) => {
      this.promotions = data
      
    })
  }
  faTrash=faTrash
  faPenToSquare=faPenToSquare

  handleRemove(_id:string) {
      if(confirm("Bạn có chắc chắn muốn xóa ??") == true) {
        this.promotionService.removePromotion(_id).subscribe((data:any) => {


          if (data.error) {
            this.toastr.warning(data.error)
            return
          }
          this.promotions= this.promotions.filter((item) => item._id != _id)
          this.toastr.success("Xóa thành công!!")
        

          
        })
      }
  }
}
