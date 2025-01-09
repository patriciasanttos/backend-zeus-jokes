import { Router } from "express";
import {
  userAuthController,
  userCreateController,
  userFetchController,
} from "./user/controller.js";

const userRouter = Router();

userRouter.get("/fetch", userFetchController);

userRouter.post("/create", userCreateController);

userRouter.post("/auth", userAuthController);

export { userRouter };
