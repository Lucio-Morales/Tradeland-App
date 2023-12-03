const { Router } = require("express");
const { buyerControllers } = require("../../controllers");

const buyerRouter = Router();

buyerRouter
  .post("/register", buyerControllers.postBuyer)
  .get("/:id", buyerControllers.getOneBuyer);

module.exports = buyerRouter;
