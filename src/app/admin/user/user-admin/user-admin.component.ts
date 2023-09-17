import { Component } from '@angular/core';
import { faTrash,faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { IUser } from 'src/app/common';
import { UserService } from 'src/app/services/user.service';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.css']
})
export class UserAdminComponent {
  faTrash=faTrash
  faPenToSquare=faPenToSquare
  faLock=faLock

  users!:IUser[]
  constructor(private userService:UserService,private toastr:ToastrService) {
    this.userService.getAllUser().subscribe((data:any) => this.users = data.users
    )
  }

  onClick (id:string) {
   this.userService.licensing(id).subscribe((data) => {

    if (data.error) {
      this.toastr.warning(data.error)
      return
    }
    this.users= this.users.filter((item) => item._id == id ? data.user : item)
    this.toastr.success(data.message)
   })
  }

  handleRemove(_id:string) {
    if(confirm("Bạn có chắc chắn muốn xóa ??") == true) {
      this.userService.removeUser(_id).subscribe((data:any) => {


        if (data.error) {
          this.toastr.warning(data.error)
          return
        }
        this.users= this.users.filter((item) => item._id != _id)
        this.toastr.success("Xóa thành công!!")
  
      })
    }
}
}
