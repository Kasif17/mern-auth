import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js"
import authRoutes from './routes/auth.route.js'
dotenv.config();
//Mongoose connection
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });
//.
const app = express();
app.use(express.json()); 

app.listen(2700, () => {
  console.log("Server is listening on port 2700 !");
});

// Api routes

app.use("/api/user",userRoutes)

app.use('/api/auth',authRoutes)