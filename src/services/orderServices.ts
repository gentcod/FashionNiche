import { OrderModel } from "../models/OrderModel";

export class OrderServices {
   public async getOrders() {
      const orders = await OrderModel.find();

      if (!orders) {
         return  {
            status: 404,
            message: 'Orders not found'
         }
      }

      return {
         status: 200,
         message: 'Orders have been fetched successfully.',
         data: {
            orders
         }
      }
   }
}