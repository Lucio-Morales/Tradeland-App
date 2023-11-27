const { Product } = require("../../db");

const createProduct = async (name, category, price) => {
  const product = await Product.create({ name, category, price });
  if (product) return { msg: "Producto creado con exito", product };
};

const searchAllProducts = async () => {
  const products = await Product.findAll();
  console.log(products);
  if (products) return products;
};

const searchProduct = async (id) => {
  const product = await Product.findByPk(id);
  if (product) return { msg: "Producto encontrado", product };
};

const modifyProduct = async (id, bodyData) => {
  const product = await Product.findByPk(id);
  if (!product) return { error: "Producto no encontrado." };
  const modifyProduct = await product.update(bodyData);

  return { msg: "El producto fue modificado", modifyProduct };
};

const removeProduct = async (id) => {
  const product = await Product.findByPk(id);
  await product.destroy();

  return { msg: `El producto se elimino correctamente`, product };
};

module.exports = {
  createProduct,
  searchProduct,
  searchAllProducts,
  modifyProduct,
  removeProduct,
};
