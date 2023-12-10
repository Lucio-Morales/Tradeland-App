const { Product, Category } = require("../../db");

// Crea un producto
const createProduct = async (storeId, name, categoryName, price) => {
  const category = await Category.findOne({ where: { name: categoryName } });
  if (!category) return { mas: "La categoria no existe." };

  const product = await Product.create({
    storeId,
    name,
    categoryId: category.id,
    price,
  });
  if (product) return { msg: "Producto creado con exito", product };
};
//Busca todos los productos
const searchAllProducts = async () => {
  const products = await Product.findAll();

  if (products) return products;
};
//Busca productos asocidos a una category mediante su id
const searchByCategoryId = async (id) => {
  const products = await Product.findAll({ where: { categoryId: id } });
  if (products) return products;
};
//Busca un producto
const searchProduct = async (id) => {
  const product = await Product.findByPk(id);
  if (product) return { msg: "Producto encontrado", product };
};
//Modifica propiedades de un producto
const modifyProduct = async (id, bodyData) => {
  const product = await Product.findByPk(id);
  if (!product) return { error: "Producto no encontrado." };
  const modifyProduct = await product.update(bodyData);

  return { msg: "El producto fue modificado", modifyProduct };
};
//Elimina un producto de la base de datos
const removeProduct = async (id) => {
  const product = await Product.findByPk(id);
  await product.destroy();

  return { msg: `El producto se elimino correctamente`, product };
};

module.exports = {
  createProduct,
  searchProduct,
  searchAllProducts,
  searchByCategoryId,
  modifyProduct,
  removeProduct,
};
