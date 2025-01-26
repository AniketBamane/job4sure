const mongoose = require('mongoose');

const connectDb = async ()=>{
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("databse connection established")
    return true
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
}
module.exports = connectDb;