const { Router } = require("express");
const { storeControllers } = require("../../controllers");

const storeRouter = Router();

storeRouter
  .post("/create", storeControllers.postStore)
  .get("/search", storeControllers.getStores);

module.exports = storeRouter;
