export interface IPromotion {
    _id?: any;
    name:string
}

export interface ICategory {
    _id?: any;
    name:string,
    image:string,
    link:string
}

export interface IProduct {
    _id?: any;
    name:string,
    image:string,
    priceOld:number,
    priceNew:number,
    sticker:string,
    categoryId:string,
    promotionId: string[];
    
}

export interface IUser {
_id?: any,
name: string,
email:string,
role:string
}