import  mongoose from 'mongoose';
import { ProductModel } from '../models/ProductModel';
import readline from 'readline';
import dotenv from 'dotenv';

dotenv.config({
  path: './config.dev.env'
});

mongoose.connect('mongodb://localhost:27017/fashion-niche').then(() => {
  console.log('Connected Successfully');
  execSeeding();
});

// INSERT DATA INTO DATABASE
const seedData = async () => {
  try {
    await ProductModel.bulkWrite([
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

    await ProductModel.insertMany([
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

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to prompt for password
const promptPassword = () => {
  rl.question('Enter password to delete data: ', (password) => {
    // Check if password matches
    if (password !== process.env.SEEDERS_PASSWORD) {
      console.log('Incorrect password. Data deletion aborted.');
      process.exit();
    }
    console.log('Deleting seeded data------------------');
    deleteData();
  });
};

// DELETE ALL DATA FROM DB
const deleteData = async () => {
  try {
    await ProductModel.deleteMany();
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
    promptPassword();
  }
};
