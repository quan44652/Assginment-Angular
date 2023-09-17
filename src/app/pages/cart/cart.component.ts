import { Component } from '@angular/core';
import { faChevronLeft, faCircleCheck,faXmark } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { IPromotion } from 'src/app/common';
import { CartService } from 'src/app/services/cart.service';
import { PromotionService } from 'src/app/services/promotion.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  constructor (private cartService:CartService, private promotionService:PromotionService, private toastr: ToastrService) {
    
  }

  faChevronLeft = faChevronLeft
  faCircleCheck = faCircleCheck
  faXmark=faXmark

  itemList:any;
  promotions!:IPromotion[]
  total!:number

  user!: any;
  userString!: any;
  cart!:any
  cartString!:any

  ngOnInit() {
    this.userString = localStorage.getItem('user')
    this.user = JSON.parse(this.userString)
    this.cartString = localStorage.getItem('cartItem')
    this.cart = JSON.parse(this.cartString)
    this.promotionService.getAllPromotion().subscribe((data) => {
      this.promotions = data
    })
    if(this.user) {
      this.cartService.getToCart().subscribe((data:any) => { 
        this.itemList = data.filter((item:any) => {
         return this.user.user._id == item.userId._id ? item : null
        })
        
        this.total = this.itemList.reduce((sum:any, item:any) => sum + (item.productId.priceNew * item.quantity), 0);  
      })
     }
     else {
      this.itemList = this.cart
     }   
  }


  onRemoveCart = (id:string) => {
   this.cartService.removeToCart(id).subscribe((data:any) => {
    this.toastr.success(data.message)
    this.itemList = this.itemList.filter((item:any) => item._id != id)
   })
  }
}
