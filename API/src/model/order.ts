import mongoose from "mongoose";
import { CustomerModel } from "./customer";
import { ProductModel, productSchema } from "./product";

export type OrderModel = {
   product: ProductModel[];
   customerId: CustomerModel
   totalCost: number;
   amountPaid: number;
   ammountOwed?: number;
   dateOfPurchase: Date
}

export type ProductDocument = mongoose.Document & OrderModel

export const orderSchema = new mongoose.Schema<OrderModel>(
   {
      product: { type: [productSchema], required: true },
      customerId: { type: Number, required: true },
      totalCost: { type: Number, required: true, unique: true },
      amountPaid: { type: Number, required: true },
      ammountOwed: { type: Number },
      dateOfPurchase: { type: Date, default: Date.now(), required: true }
   },
   {
      timestamps: true,
      toJSON: { virtuals: true },
      toObject: { virtuals: true }
   }
);

export const Product = mongoose.model<ProductDocument>("Orders", orderSchema);