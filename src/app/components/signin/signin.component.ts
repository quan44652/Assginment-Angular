import { Component } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { ProductService } from 'src/app/services/product.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  token!:string
  userString!:any

  



  faArrowLeft=faArrowLeft

  constructor (private productService:ProductService, private toastr: ToastrService, private router:Router) {

  }

  user: any = {
    email: "",
    password: ""
  }

  onSubmit = () => {
   this.productService.signin(this.user).subscribe((data) => {
    if(data.message) { 
      this.toastr.success(data.message,'Chúc mừng');
      localStorage.setItem("user",JSON.stringify(data));
      if(data.user.role == "admin") {
        this.router.navigate(['/admin/products'])
      } else {
        this.router.navigate(['/'])       
      }
    } 
    else {
      this.toastr.warning(data.error,'Cảnh báo');
    }
   })
  }


}
