import { Component } from '@angular/core';
import { faTrash,faPenToSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-category-admin',
  templateUrl: './category-admin.component.html',
  styleUrls: ['./category-admin.component.css']
})
export class CategoryAdminComponent {
  faTrash=faTrash
  faPenToSquare=faPenToSquare
}
