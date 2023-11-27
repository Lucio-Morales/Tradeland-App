const { Router } = require("express");
const { buyerControllers } = require("../../controllers");

const buyerRouter = Router();

buyerRouter.post("/create", buyerControllers.postBuyer);
buyerRouter.get("/:id", buyerControllers.getOneBuyer);

module.exports = buyerRouter;
