import { Component } from '@angular/core';
import { faTrash,faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { IProduct } from 'src/app/common';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-admin',
  templateUrl: './product-admin.component.html',
  styleUrls: ['./product-admin.component.css']
})
export class ProductAdminComponent {
  faTrash=faTrash
  faPenToSquare=faPenToSquare

  products!:IProduct[];
  constructor(private productService:ProductService, private toastr:ToastrService) {
    this.productService.getProducts().subscribe((data) => {
      this.products = data
    })
  }

  handleRemove(_id:string) {
    if(confirm("Bạn có chắc chắn muốn xóa ??") == true) {
      this.productService.removeProduct(_id).subscribe((data:any) => {
        if (data.error) {
          this.toastr.warning(data.error)
          return
        }
        this.products= this.products.filter((item) => item._id != _id)
        this.toastr.success("Xóa thành công!!")
      })

        
    }
}

}
