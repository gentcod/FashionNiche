import mongoose from "mongoose"

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

export const Product = mongoose.model<ProductDocument>("Products", productSchema)

// const newProduct = new Product({
//    color: 'Wine and Coral',
//    price: 15000,
//    pictureUrl: 'www.google.com',
//    quantityInStock: 5
// })

// newProduct.save()
// .then((doc) => {
//    console.log(`New document in collection was added: ${doc}`)
// })
// .catch(err => {
//    console.error(err)
// })