const { Router } = require("express");
const { userControllers } = require("../../controllers");

const userRouter = Router();

userRouter.post("/register", userControllers.registerUser);

module.exports = userRouter;
