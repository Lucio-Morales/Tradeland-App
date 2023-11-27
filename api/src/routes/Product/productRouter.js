const { Router } = require("express");
const { productController } = require("../../controllers");

const productRouter = Router();

productRouter
  .post("/create", productController.postProduct)
  .get("/all", productController.getAllProducts)
  .get("/:id", productController.getProduct)
  .put("/:id", productController.putProduct)
  .delete("/:id", productController.deleteProduct);

module.exports = productRouter;
