import mongoose, { Document, Schema, Types } from 'mongoose';

export interface IAuth extends Document {
   email: string;
   password: string;
   role: string
}

export enum AuthRoles {
   ADMIN = 'admin',
   USER = 'user',
   MANAGER = 'manager',
}

export const authSchema = new Schema<IAuth>({
   email: { type: String, required: true },
   password: { type: String, required: true },
   role: { type: String, default: AuthRoles.USER },
}, {
   timestamps: true,
   toJSON: { virtuals: true },
   toObject: { virtuals: true }
})

export const Auth = mongoose.model<IAuth>('Auth', authSchema, 'auth')