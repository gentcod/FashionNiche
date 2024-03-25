import mongoose, { PopulatedDoc } from 'mongoose';
import { CustomerModel } from './CustomerModel';
import { ProductModel } from './ProductModel';
import { ObjectId } from 'mongodb';

export type OrderModel = {
   product: PopulatedDoc<ProductModel>;
   customerId: PopulatedDoc<CustomerModel>
   totalCost: number;
   amountPaid: number;
   ammountOwed?: number;
   dateOfPurchase: Date
}

export type ProductDocument = mongoose.Document & OrderModel

export const orderSchema = new mongoose.Schema<OrderModel>(
   {
      product: { type: ObjectId, ref: 'Products', required: true },
      customerId: { type: ObjectId, ref: 'Customers', required: true },
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

export const Order = mongoose.model<ProductDocument>('Orders', orderSchema);