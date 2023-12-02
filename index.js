import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./Routes/User.js"
import busRoute from "./Routes/Bus.js"

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

const corsOptions = {
  origin: true,
};

app.get('/', (req, res) => {
  res.send('API is working');
});

// Database connection
mongoose.set('strictQuery', false)
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log("MongoDB database is connected");
  } catch (err) {
    console.log("MongoDB connection failed:", err.message);
  }
}

// Middleware part
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use('/api/v1/User', userRoute)
app.use('/api/v1/Bus', busRoute)

// Start the server
app.listen(port, () => {
  connectDB();
  console.log("Server is running on port " + port);
});

