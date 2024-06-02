import { IProduct, ProductType } from "../models/ProductModel";

export class ProductDto {
   color: string;
   type: string;
   price: number;
   pictureUrl: string;
   quantityInStock: number;
}

export class ProductResModel extends ProductDto{

   static createProductRes(product: IProduct): ProductResModel{
      return {
         color: product.color,
         type: product.type,
         price: product.price,
         pictureUrl: product.pictureUrl,
         quantityInStock: product.quantityInStock
      }
   }
}