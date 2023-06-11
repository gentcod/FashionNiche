import mongoose from "mongoose";
import { OrderModel, orderSchema } from "./order";

export type CustomerModel = {
   name: string;
   phoneNumber: string;
   email?: string;
   address?: string;
   orders: OrderModel[];
}

export type CustomerDocument = mongoose.Document & CustomerModel;

export const customerSchema = new mongoose.Schema<CustomerModel>({
   name: {type: String, required: true},
   phoneNumber: {type: String, required: true, unique: true},
   email: {type: String, unique: false},
   address: {type: String},
   orders: {type: [orderSchema], required: true}
}, 
{
   timestamps: true,
   toJSON: {virtuals: true},
   toObject: {virtuals: true}
});

export const Customer = mongoose.model<CustomerDocument>("Customer", customerSchema);