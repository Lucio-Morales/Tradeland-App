const { Router } = require("express");
const buyerRouter = require("./Buyer/buyerRouter");
const sellerRouter = require("./Seller/sellerRouter");
const productRouter = require("./Product/productRouter");
const categoryRouter = require("./Category/CategoryRouter");
const userRouter = require("./User/UserRouter");
const storeRouter = require("./Store/storeRouter");

const routes = Router();

routes
  .use("/user", userRouter)
  .use("/buyer", buyerRouter)
  .use("/seller", sellerRouter)
  .use("/store", storeRouter)
  .use("/product", productRouter)
  .use("/category", categoryRouter);

module.exports = routes;
