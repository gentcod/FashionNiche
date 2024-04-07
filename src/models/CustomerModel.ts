import mongoose, { Document, Schema, Types } from 'mongoose';

export interface ICustomer extends Document {
   firstName: string;
   lastName: string;
   fullname: string;
   phoneNumber: string;
   email?: string;
   address: IAddress;
   orders?: Types.ObjectId[];
}

export interface IAddress extends Document {
   shippingAddress?: string;
   city: string;
   country: CustomerCountryEnum;
}

export enum CustomerCountryEnum {
   LOCAL = 'Nigeria',
   ABROAD = 'United States'
}


export const customerSchema = new Schema<ICustomer>({
   firstName: { type: String, required: true },
   lastName: { type: String, required: true },
   phoneNumber: { type: String, required: true, unique: true },
   email: { type: String, required: false },
   address: {
      type:
      {
         shippingAddress: {
            type: String,
            required: false,
         },
         city: { type: String, required: true },
         country: { type: String, default: CustomerCountryEnum.LOCAL },
      },
      required: false
   },
   orders: {
      type: [
         { type: Schema.Types.ObjectId, ref: 'Orders', required: true }
      ],
      required: false,
   },
},
   {
      timestamps: true,
      toJSON: { virtuals: true },
      toObject: { virtuals: true }
   }
);

customerSchema.virtual('fullName').get(function () {
   return `${this.firstName} ${this.lastName}`;
});

export const CustomerModel = mongoose.model<ICustomer>('Customers', customerSchema, 'customers');