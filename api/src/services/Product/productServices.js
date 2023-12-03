const { Product, Category } = require("../../db");

const createProduct = async (name, categoryName, price) => {
  const category = await Category.findOne({ where: { name: categoryName } });
  if (!category) return { mas: "La categoria no existe." };

  const product = await Product.create({
    name,
    categoryId: category.id,
    price,
  });
  if (product) return { msg: "Producto creado con exito", product };
};

const searchAllProducts = async () => {
  const products = await Product.findAll();

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
