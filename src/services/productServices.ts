import { ProductDto } from '../dtos/productDTOs';
import { ProductModel, ProductType } from '../models/ProductModel';


export class ProductServices {
   public async createProduct(productData: ProductDto) {
      const productType = (productData.type.toUpperCase()) as keyof typeof ProductType;
           
      const existingProduct = await ProductModel.findOne({color: productData.color, type: ProductType[productType]})
      if (existingProduct) {
         return {
            status: 400,
            message: 'Product already exists',
         };
      }

      const data = {
         ...productData,
         type: ProductType[productType],
      }
      console.log('Data', data);

      const product = await ProductModel.create(data);
      return {
         status: 200,
         message: 'Product has beenm created successfully',
         data: {
            products: product
         },
      };
   }

   public async getProducts() {
      const products = await ProductModel.find();

      if (!products) {
         return {
            status: 404,
            message: 'Invalid to fetch data'
         };
      }

      return {
         status: 200,
         message: 'Products have been fetched successfully',
         data: {
            products: products
         }
      };
   }
}