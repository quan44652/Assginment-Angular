import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  id: any = '';
  product: any = {}

  constructor(private router: ActivatedRoute,
    private productService: ProductService) {
      this.getProduct()
  }

  getProduct() {
    this.router.params.subscribe(({ id }) => this.id = id)
    this.productService.getProduct(this.id).subscribe(data => {
      this.product = data
    })
  }

}
