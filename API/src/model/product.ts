import mongoose from 'mongoose';

export type ProductModel = {
   color: string;
   price: number;
   pictureUrl: string;
   quantityInStock: number
}

export type ProductDocument = mongoose.Document & ProductModel

export const productSchema = new mongoose.Schema<ProductModel>(
   {
      color: { type: String, required: true },
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

export const Product = mongoose.model<ProductDocument>('Products', productSchema);