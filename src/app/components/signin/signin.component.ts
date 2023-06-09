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

  token!:string
  userString!:any

  



  faArrowLeft=faArrowLeft

  constructor (private productService:ProductService, private toastr: ToastrService) {

  }

  user: any = {
    email: "",
    password: ""
  }

  onSubmit = () => {
   this.productService.signin(this.user).subscribe((data) => {
    if(data.message) { 
      this.toastr.success(data.message,'Chúc mừng');
      console.log(data);
      localStorage.setItem("user",JSON.stringify(data));
    } 
    else {
      this.toastr.warning(data.error,'Cảnh báo');
    }
   })
  }


}
