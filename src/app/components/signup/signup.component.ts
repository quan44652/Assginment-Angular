import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor (private productService:ProductService, private toastr: ToastrService) {

  }

  user: any = {
    email: "",
    name:"",
    password: "",
    confirmPassword:""
  }

  onSubmit = () => {
   this.productService.signup(this.user).subscribe((data) => {
    if(data.message) {
      this.toastr.success(data.message,'Chúc mừng');
    } 
    else {
      this.toastr.warning(data.error,'Cảnh báo');

    }
   })
  }
}
