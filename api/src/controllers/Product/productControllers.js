const { productServices } = require("../../services");

// Crea un producto
const postProduct = async (req, res) => {
  try {
    const { name, categoryName, price } = req.body;
    const response = await productServices.createProduct(
      name,
      categoryName,
      price
    );
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// Busca todos los productos de la base de datos
// Si recibe una category por query, busca solo los productos asociados a esa category.
const getAllProducts = async (req, res) => {
  const { categoryId } = req.query;
  try {
    const response = categoryId
      ? await productServices.searchByCategoryId(categoryId)
      : await productServices.searchAllProducts();
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// Busca un producto por id
const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await productServices.searchProduct(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// Modifica un producto
const putProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const bodyData = req.body;
    const response = await productServices.modifyProduct(id, bodyData);
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// Elimina un producto de la base de datos
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await productServices.removeProduct(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  postProduct,
  getProduct,
  getAllProducts,
  putProduct,
  deleteProduct,
};
