import express from "express";
import { getUsers, getSingleUser } from "../handlers/user/user-adapter";
const userRoutes = express.Router();

userRoutes.get("/get", getUsers);
userRoutes.get("/get/single/:usercode", getSingleUser);

export default userRoutes;
