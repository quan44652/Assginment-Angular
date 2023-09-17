import { Component, Input } from '@angular/core';
import { NgxTippyProps } from 'ngx-tippy-wrapper';
import { ProductService } from '../../services/product.service'


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  @Input() title: string = '';
  @Input() products: any = [];
  @Input() moreProduct: any = [];
 ngOnInit = () => {
 }
 
}
