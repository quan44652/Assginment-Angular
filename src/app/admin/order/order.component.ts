import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  cartList!: any;
  
  constructor(private cartService:CartService) {
    this.cartService.getToCart().subscribe((data) => {
      console.log(data);
      this.cartList = data
      
    })
  }
}
