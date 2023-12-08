const { Router } = require("express");
const { storeControllers } = require("../../controllers");

const storeRouter = Router();

storeRouter.post("/create", storeControllers.postStore);

module.exports = storeRouter;
