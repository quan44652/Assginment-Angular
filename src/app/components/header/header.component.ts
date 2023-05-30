import { Component } from '@angular/core';
import { faSearch,faTruckFast,faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isShown: boolean = true;
  searchValue:any = null;
  searchProducts:any = []
  products:any = []

  constructor(private productService:ProductService) {}

faSearch = faSearch
faTruckFast = faTruckFast
faCartShopping=faCartShopping

ngOnInit () {
  this.onSearch()
}

onSearch() {
  this.isShown = true
  this.productService.getProducts().subscribe((data) => {
    this.products = data.filter((item: any) => {
      return item.name.toLowerCase().includes(this.searchValue == "" ? null : this.searchValue.toLowerCase());
    });
  });
}

onClickOutside() {
  this.isShown = false;
}

onClickHiden = () => {
  this.isShown = !this.isShown
}

}
