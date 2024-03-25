import mongoose, { PopulatedDoc } from 'mongoose';
import { OrderModel } from './OrderModel';
import { ObjectId } from 'mongodb';

export type CustomerModel = {
   name: {
      firstName: string;
      lastName: string;
   };
   phoneNumber: string;
   email?: string;
   address?: string;
   shippingAddress?: string;
   orders: PopulatedDoc<OrderModel> | null;
}

export type CustomerDocument = mongoose.Document & CustomerModel;

export const customerSchema = new mongoose.Schema<CustomerModel>({
   name: { type: String, required: true },
   phoneNumber: { type: String, required: true, unique: true },
   email: { type: String, unique: false },
   address: { type: String },
   shippingAddress: { type: String },
   orders: { type: ObjectId, ref: 'Orders', required: true }
},
   {
      timestamps: true,
      toJSON: { virtuals: true },
      toObject: { virtuals: true }
   });

export const Customer = mongoose.model<CustomerDocument>('Customers', customerSchema);