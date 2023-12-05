// import { connect, set } from 'mongoose';

// import { UserModel } from '../models/user.model.js';
// import { FoodModel } from '../models/food.model.js';
// import { sample_users } from '../data.js';
// import { sample_foods } from '../data.js';
// import bcrypt from 'bcryptjs';
// const PASSWORD_HASH_SALT_ROUNDS = 10;
// set('strictQuery', true);




// export const dbconnect = async () => {
//   try {
//     connect(process.env.MONGO_URI, {
//       // useNewUrlParser: true,
//       // useUnifiedTopology: true,
//     });
//     await seedUsers();
//     // await seedFoods();
//     console.log('connect successfully---');
//   } catch (error) {
//     console.log(error);
//   }
// };

// async function seedUsers() {
//   // const usersCount = await UserModel.countDocuments();
//   // if (usersCount > 0) {
//   //   console.log('Users seed is already done!');
//   //   return;
//   // }

//   for (let user of sample_users) {
//     user.password = await bcrypt.hash(user.password, PASSWORD_HASH_SALT_ROUNDS);
//     await UserModel.create(user);
//   }

//   console.log('Users seed is done!');
// }

// // async function seedFoods() {
// //   const foods = await FoodModel.countDocuments();
// //   if (foods > 0) {
// //     console.log('Foods seed is already done!');
// //     return;
// //   }

// //   for (const food of sample_foods) {
// //     food.imageUrl = `/foods/${food.imageUrl}`;
// //     await FoodModel.create(food);
// //   }

// //   console.log('Foods seed Is Done!');
// // }



// Code  for mongoose config in backend
// Filename - backend/index.js
 
// To connect with your mongoDB database
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/food', {
    dbName: 'yourDB-name',
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => err ? console.log(err) : 
    console.log('Connected to yourDB-name database'));
 
// Schema for users of app
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});
const User = mongoose.model('users', UserSchema);
User.createIndexes();
 
// For backend and express
const express = require('express');
const app = express();
const cors = require("cors");
console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());
app.get("/", (req, resp) => {
 
    resp.send("App is Working");
    // You can check backend is working or not by 
    // entering http://loacalhost:5000
     
    // If you see App is working means
    // backend working properly
});