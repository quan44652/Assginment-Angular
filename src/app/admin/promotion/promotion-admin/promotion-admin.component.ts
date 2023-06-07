import { Component } from '@angular/core';
import { faTrash,faPenToSquare } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-promotion-admin',
  templateUrl: './promotion-admin.component.html',
  styleUrls: ['./promotion-admin.component.css']
})
export class PromotionAdminComponent {
  faTrash=faTrash
  faPenToSquare=faPenToSquare
}
