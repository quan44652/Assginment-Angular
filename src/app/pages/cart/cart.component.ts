import { Component } from '@angular/core';
import { faChevronLeft, faCircleCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  faChevronLeft = faChevronLeft
  faCircleCheck = faCircleCheck

  tatol: number = 0


  products = [
    {
      "ad": 1,
      "sticker": "https://hoanghamobile.com/Content/web/sticker/apple.png",
      "name": "Điện thoại di động iPhone 14 (128GB) - Chính hãng VN/A",
      "image": "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/03/31/image-removebg-preview.png",
      "priceNew": "10190000",
      "priceOld": "19990000",
      "promotionId": [
        "Ưu đãi đến 300.000đ khi mở Ví hoặc thanh toán qua VNPAY", "Giảm thêm tới1.000.000đ khi Thu cũ - Lên đời iPhone 11 | 12 | 13 Series", "Giảm thêm tới 800.000đ khi mở thẻ tín dụng TPBank EVO - Duyệt nhanh chỉ 15 phút, LH Cửa hàng hoặc 19002091 để được hỗ trợ"
      ],
      "quality": 2
    },
    {
      "ad": 2,
      "sticker": "https://hoanghamobile.com/Content/web/sticker/apple.png",
      "name": "Điện thoại di động iPhone 14 (128GB) - Chính hãng VN/A",
      "image": "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/03/31/image-removebg-preview.png",
      "priceNew": "10190000",
      "priceOld": "19990000",
      "promotionId": [
        "Ưu đãi đến 300.000đ khi mở Ví hoặc thanh toán qua VNPAY", "Giảm thêm tới1.000.000đ khi Thu cũ - Lên đời iPhone 11 | 12 | 13 Series", "Giảm thêm tới 800.000đ khi mở thẻ tín dụng TPBank EVO - Duyệt nhanh chỉ 15 phút, LH Cửa hàng hoặc 19002091 để được hỗ trợ"
      ],
      "quality": 2
    },
    {
      "ad": 3,
      "sticker": "https://hoanghamobile.com/Content/web/sticker/apple.png",
      "name": "Điện thoại di động iPhone 14 (128GB) - Chính hãng VN/A",
      "image": "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/03/31/image-removebg-preview.png",
      "priceNew": "10190000",
      "priceOld": "19990000",
      "promotionId": [
        "Ưu đãi đến 300.000đ khi mở Ví hoặc thanh toán qua VNPAY", "Giảm thêm tới1.000.000đ khi Thu cũ - Lên đời iPhone 11 | 12 | 13 Series", "Giảm thêm tới 800.000đ khi mở thẻ tín dụng TPBank EVO - Duyệt nhanh chỉ 15 phút, LH Cửa hàng hoặc 19002091 để được hỗ trợ"
      ],
      "quality": 2
    },
    {
      "ad": 4,
      "sticker": "https://hoanghamobile.com/Content/web/sticker/apple.png",
      "name": "Điện thoại di động iPhone 14 (128GB) - Chính hãng VN/A",
      "image": "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/03/31/image-removebg-preview.png",
      "priceNew": "10190000",
      "priceOld": "19990000",
      "promotionId": [
        "Ưu đãi đến 300.000đ khi mở Ví hoặc thanh toán qua VNPAY", "Giảm thêm tới1.000.000đ khi Thu cũ - Lên đời iPhone 11 | 12 | 13 Series", "Giảm thêm tới 800.000đ khi mở thẻ tín dụng TPBank EVO - Duyệt nhanh chỉ 15 phút, LH Cửa hàng hoặc 19002091 để được hỗ trợ"
      ],
      "quality": 2
    },
  ]


  ngOnInit = () => {
    this.products.reduce((accumulator, currentValue): any => {
      console.log(accumulator, currentValue)
      return
    }
    )
  }
}
