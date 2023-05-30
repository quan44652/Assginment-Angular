import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products: any = []
  constructor(private productService: ProductService) { }
  ngOnInit() {
    // this.productService.getProductByCategory().subscribe(data => this.products = data
    // )

    this.productService.getProducts().subscribe(data =>
      this.products = data)
  }
}
