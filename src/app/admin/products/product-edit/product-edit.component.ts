import { Component } from '@angular/core';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {
  selectedCars = [3];
  cars = [
      { id: 1, name: ' Ưu đãi đến 300.000đ khi mở Ví hoặc thanh toán qua VNPAY' },
      { id: 2, name: ' Ưu đãi đến 300.000đ khi mở Ví hoặc thanh toán qua VNPAY', disabled: true },
      { id: 3, name: ' Ưu đãi đến 300.000đ khi mở Ví hoặc thanh toán qua VNPAY' },
      { id: 4, name: ' Ưu đãi đến 300.000đ khi mở Ví hoặc thanh toán qua VNPAY' },
  ];

  ngOnInit() {

  }
}
