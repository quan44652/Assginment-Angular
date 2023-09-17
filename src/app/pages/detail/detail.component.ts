import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  id: any = '';
  product: any = {}
  user!: any;
  userString!: any;
  cartList:any = []
  cart!: any
  cartString!:any

  ngOnInit() {
    this.userString = localStorage.getItem('user')
    this.user = JSON.parse(this.userString)
    this.cartString = localStorage.getItem('cart')
    this.cart = JSON.parse(this.cartString)
  }

  

  constructor(private router: ActivatedRoute,
    private toastr: ToastrService,
    private cartService: CartService,
    private productService: ProductService) {
    this.getProduct()
  }

  getProduct() {
    this.router.params.subscribe(({ id }) => this.id = id)
    this.productService.getProduct(this.id).subscribe(data => {
      this.product = data
    })
  }

  onAddToCart(productId: string, product:any) {
   if(this.user) {
    this.cartService.addToCart({
      userId: this.user.user._id,
      productId: productId,
      quantity: 1
    }).subscribe((data) => this.toastr.success(data.message)
    )
   }
   else {
    if(this.cartList.length == 0 || this.cartList.includes(product)) {
      this.cartList.push({productId: product,  quantity: 1})       
      localStorage.setItem("cartItem", JSON.stringify(this.cartList)) 
      this.toastr.success("Thêm vào giỏ hàng thành công")
      return   
    }
     else {
       this.cartList = this.cartList.filter((item:any) => {
         if(item.productId._id == productId) {
           return {
             productId: item.productId,
             quantity: item.quantity += 1
            }
          }
          else {
          return item
        }
      })
      localStorage.setItem("cartItem", JSON.stringify(this.cartList)) 
      this.toastr.success("Thêm vào giỏ hàng thành công")
      return   
     }
   }
  }

}
