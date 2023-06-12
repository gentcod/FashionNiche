import mongoose, {PopulatedDoc} from "mongoose";
import { CustomerModel } from "./customer";
import { ProductModel, productSchema } from "./product";
import { ObjectId } from "mongodb";

export type OrderModel = {
   product: PopulatedDoc<ProductModel>;
   customerId?: PopulatedDoc<CustomerModel>
   totalCost: number;
   amountPaid: number;
   ammountOwed?: number;
   dateOfPurchase: Date
}

export type ProductDocument = mongoose.Document & OrderModel

export const orderSchema = new mongoose.Schema<OrderModel>(
   {
      product: { type: ObjectId, ref: 'Products', required: true },
      // customerId: { type: ObjectId, required: true },
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

export const Order = mongoose.model<ProductDocument>("Orders", orderSchema);

// const newOrder = new Order({
//    product: '64865fb10a9fd0502b6acc0f',
//    // customerId: 'none',
//    totalCost: 50000,
//    amountPaid: 30000,
//    ammountOwed: 20000,
// })

// newOrder.save()
// .then((doc) => {
//    console.log(`New document in collection was added: ${doc}`)
// })
// .catch(err => {
//    console.error(err)
// })