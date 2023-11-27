const { Router } = require("express");
const { categoryController } = require("../../controllers");

const categoryRouter = Router();

categoryRouter.post("/create", categoryController.postCategory);

module.exports = categoryRouter;
