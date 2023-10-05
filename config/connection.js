require("dotenv").config();
const mongoose = require("mongoose");

const uri = process.env.MONGO_URL;
const connectToDatabase = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected! 🚀");
  } catch (err) {
    console.error(`Oops 😣 ${err}`);
    throw err;
  }
};

module.exports = connectToDatabase;
