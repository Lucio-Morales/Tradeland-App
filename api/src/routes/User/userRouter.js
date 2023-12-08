const { Router } = require("express");
const { userControllers } = require("../../controllers");

const userRouter = Router();

userRouter
  .post("/register", userControllers.registerUser)
  .post("/login", userControllers.userLogin);

module.exports = userRouter;
