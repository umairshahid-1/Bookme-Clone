import express from "express";
import { SignUp, Login } from "../Controllers/UserController.js";

const userRoute = express.Router();

userRoute.post("/signup", SignUp);
userRoute.post("/login", Login);

export default userRoute;
