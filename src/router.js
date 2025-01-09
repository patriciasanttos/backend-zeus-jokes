import { Router } from "express";
import {
  userAuthController,
  userFetchController,
  userCreateController,
} from "./user/controller.js";

const userRouter = Router()

userRouter.get("/fetch", userFetchController);

userRouter.post("/create", userCreateController);

userRouter.post("/auth", userAuthController);


export { userRouter}
