import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ICategory } from 'src/app/common';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent {
 categoryCurrent!:ICategory;
 categoryNew!:ICategory
constructor(private activeRouter:ActivatedRoute,private toastr:ToastrService, private formBuilder:FormBuilder,private router:Router, private categoryService:CategoryService) {
this.activeRouter.params.subscribe(({id}) => {
  this.categoryService.getCategory(id).subscribe((data:any) => {  
    this.categoryCurrent = data
    this.formValue.patchValue(data)
  })
}
)
}

formValue = this.formBuilder.group({
  name: "",
  image:"",
  link:""
})

onSubmit() {
  this.categoryNew = {
    _id: this.categoryCurrent._id,
    name: this.formValue.value.name || "",
    link: this.formValue.value.link || "",
    image: this.formValue.value.image || "",
  }
    this.categoryService.updateCategory(this.categoryNew).subscribe((data:any) => {
      if(data.error) {
        this.toastr.warning(data.error,"Cảnh báo")
      }
      else {
        this.toastr.success(data.message,"Chúc mừng")
this.router.navigate(['/admin/category'])
      }
    }
    )
}
}
