const { productServices } = require("../../services");

const postProduct = async (req, res) => {
  try {
    const { name, category, price } = req.body;
    const response = await productServices.createProduct(name, category, price);
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const response = await productServices.searchAllProducts();
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await productServices.searchProduct(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

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
