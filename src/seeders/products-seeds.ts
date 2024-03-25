import  mongoose from 'mongoose';
import { Product } from '../models/ProductModel';

mongoose.connect('mongodb://localhost:27017/fashion-niche').then(() => {
  console.log('Connected Successfully');
  execSeeding();
});

const seedData = async () => {
  try {
    await Product.bulkWrite([
      {
        insertOne: {
          document: {
            color: 'Red',
            price: 500,
            pictureUrl: 'pic.com',
            quantityInStock: 3,
          },
        },
      },
      {
        insertOne: {
          document: {
            color: 'White',
            price: 500,
            pictureUrl: 'pic.com',
            quantityInStock: 3,
          },
        },
      },
      {
        insertOne: {
          document: {
            color: 'Black',
            price: 500,
            pictureUrl: 'pic.com',
            quantityInStock: 3,
          },
        },
      },
    ]);

    await Product.insertMany([
      {
        color: 'Blue',
        price: 250,
        pictureUrl: 'pic.com',
        quantityInStock: 3,
      },
      {
        color: 'Orange',
        price: 400,
        pictureUrl: 'pic.com',
        quantityInStock: 3,
      },
      {
        color: 'Purple',
        price: 1500,
        pictureUrl: 'pic.com',
        quantityInStock: 3,
      },
    ]);
    console.log('Initialized');  
  } catch (err) {
    console.error(err);
  }
  process.exit();
};

// DELETE ALL DATA FROM DB
const deleteData = async () => {
  try {
    await Product.deleteMany();
    console.log('Data successfully deleted!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

console.log(process.argv);

const execSeeding = () => {
  if (process.argv[2] === '--import') {
    seedData();
  } else if (process.argv[2] === '--delete') {
    deleteData();
  }
};
