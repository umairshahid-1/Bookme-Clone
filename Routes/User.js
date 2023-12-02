import express from "express";
import { SignUp, Login } from "../Controllers/UserController.js";
import { updateUser, deleteUser, getAllUser, getSingleUser,} from "../Controllers/UserController.js";

const userRoute = express.Router();

userRoute.post("/signup", SignUp);
userRoute.post("/login", Login);

userRoute.get("/:id", getSingleUser);
userRoute.get("/", getAllUser);
userRoute.put("/:id", updateUser);
userRoute.delete("/:id", deleteUser);

export default userRoute;
