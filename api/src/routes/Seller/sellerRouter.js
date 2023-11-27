const { Router } = require("express");
const { sellerControllers } = require("../../controllers");

const sellerRouter = Router();

sellerRouter
  .post("/create", sellerControllers.postSeller)
  .get("/:id", sellerControllers.getOneSeller);

module.exports = sellerRouter;
