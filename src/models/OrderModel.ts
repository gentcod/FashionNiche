import mongoose, { Document, Schema, Types } from 'mongoose';

export interface IOrder extends Document {
   customerId: Types.ObjectId;
   products: OrderProduct[];
   totalCost: number;
   amountPaid: number;
   ammountOwed?: number;
   orderCompleted: boolean;
   dateOfOrderCompletion: Date;
}

export type OrderProduct = {
   productId: Types.ObjectId
   quantityRequested: number;
   quantityDelivered: number;
   quantityOwed: number;
}

export const orderSchema = new Schema<IOrder>(
   {
      products: {
         type: [
            {
               productId: { type: Schema.Types.ObjectId, ref: 'Products', required: true },
               quantityRequested: { type: Number, required: true, },
               quantityDelivered: { type: Number, required: true, },
               quantityOwed: { type: Number, required: true, },
            }
         ],
         required: true
      },
      customerId: { type: Schema.Types.ObjectId, ref: 'Customers', required: true },
      totalCost: { type: Number, required: true, },
      amountPaid: { type: Number, required: true },
      ammountOwed: { type: Number, required: true},
      orderCompleted: { type: Boolean, required: true},
      dateOfOrderCompletion: { type: Date, default: Date.now(), required: false }
   },
   {
      timestamps: true,
      toJSON: { virtuals: true },
      toObject: { virtuals: true }
   }
);

export const OrderModel = mongoose.model<IOrder>('Orders', orderSchema, 'orders');