import { Component } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { ProductService } from 'src/app/services/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  faArrowLeft=faArrowLeft

  constructor (private productService:ProductService, private toastr: ToastrService) {

  }

  user: any = {
    email: "",
    password: ""
  }

  onSubmit = () => {
   this.productService.signin(this.user).subscribe((data) => {
    console.log(data);
    if(data.message) {
      console.log(data);
      this.toastr.success(data.message,'Chúc mừng');
      console.log(data);
      
    } 
    else {
      this.toastr.warning(data.error,'Cảnh báo');
    }
   })
  }


}
