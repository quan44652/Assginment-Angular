import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { faPhone,faLaptopHouse } from '@fortawesome/free-solid-svg-icons';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  constructor(private productService: ProductService) {}
  faPhone = faPhone;
  faLaptopHouse=faLaptopHouse

  category:any = [];

  ngOnInit () {
    this.productService.getAllCategory().subscribe(data => this.category = data)
  }

  handleClick = (id:string) => {
    return this.productService.getCategory(id).subscribe(data => this.productService.setProductByCategory(data))
  }
}
