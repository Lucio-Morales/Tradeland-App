const { categoryServices } = require("../../services");

// Crea una categoria
const postCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const response = await categoryServices.createCategory(name);
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  postCategory,
};
