import { Component } from '@angular/core';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { ICategory } from 'src/app/common';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-admin',
  templateUrl: './category-admin.component.html',
  styleUrls: ['./category-admin.component.css']
})
export class CategoryAdminComponent {
  faTrash = faTrash
  faPenToSquare = faPenToSquare
  categories!: ICategory[]

  constructor(private categoryService: CategoryService, private toastr: ToastrService) {
    this.categoryService.getAllCategory().subscribe((data: any) => this.categories = data)
  }

  handleRemove(_id: string) {
    if (confirm("Bạn có chắc chắn muốn xóa ??") == true) {
      this.categoryService.removeCategory(_id).subscribe((data: any) => {

        if (data.error) {
          this.toastr.warning(data.error)
          return
        }
        this.categories = this.categories.filter((item) => item._id != _id)
        this.toastr.success("Xóa thành công!!")
      }

      )
    }
  }
}
