import mongoose, { Document } from 'mongoose';

export interface IProduct extends Document {
   color: string;
   type: ProductType;
   price: number;
   pictureUrl: string;
   quantityInStock: number
}

export enum ProductType {
   CROWNTEX = 'crowntex',
   SUPERNET = 'super-net',
   COTTON = 'cotton',
   ONJAWU = 'onjawu'
}

export const productSchema = new mongoose.Schema<IProduct>(
   {
      color: { type: String, required: true },
      type: {type: String, enum: ProductType, required: true},
      price: { type: Number, required: true },
      pictureUrl: { type: String, required: true, unique: true },
      quantityInStock: { type: Number, required: true },
   },
   {
      timestamps: true,
      toJSON: { virtuals: true },
      toObject: { virtuals: true }
   }
);

export const ProductModel = mongoose.model<IProduct>('Products', productSchema, 'products');