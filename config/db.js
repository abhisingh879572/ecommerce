import mongoose from "mongoose";
import colors from "colors";

// const dbURI = process.env.dbURI || "mongodb://localhost:27017/Ecommerce"; // Providing a default URI if process.env.dbURI is not defined

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      `Connected To MongoDB Database ${conn.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    console.log(`Error in MongoDB ${error}`.bgRed.white);
  }
};

export default connectDB;

// mongosh
// Current Mongosh Log ID:	661635847129f2cc24ef634a
// Connecting to:		mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.3
// Using MongoDB:		6.0.14
// Using Mongosh:		2.2.3

// For mongosh info see: https://docs.mongodb.com/mongodb-shell/

// ------
//    The server generated these startup warnings when booting
//    2024-04-10T10:03:49.311+05:30: Using the XFS filesystem is strongly recommended with the WiredTiger storage engine. See http://dochub.mongodb.org/core/prodnotes-filesystem
//    2024-04-10T10:03:49.590+05:30: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
//    2024-04-10T10:03:49.590+05:30: vm.max_map_count is too low
// ------

// test> show dbs
// Ecommerce   196.00 KiB
// TaskAMit     48.00 KiB
// abhi        108.00 KiB
// admin        40.00 KiB
// collage     228.00 KiB
// config      108.00 KiB
// diliptask    80.00 KiB
// ecommerce;   36.00 KiB
// ecrommes     12.00 KiB
// local       100.00 KiB
// mydatabase  252.00 KiB
// resume      176.00 KiB
// test> use
// test> use Ecommerce()
// switched to db Ecommerce()
// Ecommerce()> use Ecommerce
// switched to db Ecommerce
// Ecommerce> find()
// ReferenceError: find is not defined
// Ecommerce>
// (To exit, press Ctrl+C again or Ctrl+D or type .exit)
// Ecommerce> show collections
// categories
// orders
// products
// users
// Ecommerce> db.users.find()
// [
//   {
//     _id: ObjectId('6615341a7eb1a56609d7b2a3'),
//     name: 'Dilip Kumar',
//     email: 'abhisingh12@gmail.com',
//     password: '$2b$10$pN5kXVCHipUERoCyhpt46e1Xin1RVnipQUHXkeoX48OWcMnx2RIfu',
//     phone: '56766676687',
//     address: 'Lucknow',
//     role: 'user',
//     createdAt: ISODate('2024-04-09T12:27:06.316Z'),
//     updatedAt: ISODate('2024-04-09T12:27:06.316Z'),
//     __v: 0
//   },
//   {
//     _id: ObjectId('661535bc4006ab3a5b1f666f'),
//     name: 'Manish kumar',
//     email: 'abhisingh124@gmail.com',
//     password: '$2b$10$9OXKk1Z44gvdvZURWfKWFunP4.5ui5WAbjlkA4pRX9FIoUljmKD9W',
//     phone: '565778888',
//     address: 'Lucknow',
//     answer: 'cricket',
//     role: 'user',
//     createdAt: ISODate('2024-04-09T12:34:04.834Z'),
//     updatedAt: ISODate('2024-04-09T12:34:04.834Z'),
//     __v: 0
//   },
//   {
//     _id: ObjectId('6615361a4006ab3a5b1f667a'),
//     name: 'Manish kumar',
//     email: 'manish124@gmail.com',
//     password: '$2b$10$8shAlngNE8kcdZzmCGLS.Owp8oPVTPTQnv/5sPADluoHFgelKS4v.',
//     phone: '23456656',
//     address: 'Lucknow',
//     answer: 'crickt',
//     role: 'user',
//     createdAt: ISODate('2024-04-09T12:35:38.604Z'),
//     updatedAt: ISODate('2024-04-09T12:36:42.155Z'),
//     __v: 0
//   },
//   {
//     _id: ObjectId('661631293f88750044ecf58a'),
//     name: 'test',
//     email: 'test@test.com',
//     password: '$2b$10$v6/MNs3yVpTmiJ68K5etaOCU5RRu9wzjC7GCWB7UrFBs/ake.3oLa',
//     phone: '5657890890',
//     address: 'Manish kumar',
//     answer: 'hello',
//     role: 0,
//     createdAt: ISODate('2024-04-10T06:26:49.676Z'),
//     updatedAt: ISODate('2024-04-10T06:26:49.676Z'),
//     __v: 0
//   },
//   {
//     _id: ObjectId('661634033f88750044ecf5b0'),
//     name: 'admin',
//     email: 'admin@admin.com',
//     password: '$2b$10$bFsX4d3jBkm50Xv.JCOhvuoYB6cRhdEXY7CbK1JbvzXNS9DxADQWq',
//     phone: '43345467',
//     address: 'fvd ',
//     answer: 'xvxbx',
//     role: 0,
//     createdAt: ISODate('2024-04-10T06:38:59.538Z'),
//     updatedAt: ISODate('2024-04-10T06:38:59.538Z'),
//     __v: 0
//   }
// ]
// Ecommerce> db.users.updateOne(
// ...    { email: 'admin@admin.com' }, // Filter document by email
// ...    { $set: { role: 1 } } // Update 'role' field to 1
// ... )
// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 1,
//   modifiedCount: 1,
//   upsertedCount: 0
// }
// Ecommerce>
