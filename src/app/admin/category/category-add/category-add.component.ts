import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ICategory } from 'src/app/common';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent {
  constructor(private categoryService:CategoryService,private toastr:ToastrService, private router:Router) {}

  category:ICategory = {
    name: "",
    image:"",
    link:""
  }

  onSubmit () {
    this.categoryService.addCategory(this.category).subscribe((data:any) => {
      
      if(data.error) {
        this.toastr.warning(data.error,"Cảnh báo")
      }
      else {
        this.toastr.success(data.message,"Chúc mừng")
    this.router.navigate(['/admin/category'])
      }
})
  }
}
