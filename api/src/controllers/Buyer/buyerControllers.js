const { buyerServices } = require("../../services");

// Crea un buyer
const postBuyer = async (req, res) => {
  try {
    const { type, name, email, password } = req.body;
    const response = await buyerServices.createBuyer(
      type,
      name,
      email,
      password
    );
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// Busca un buyer por id
const getOneBuyer = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await buyerServices.searchBuyer(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  postBuyer,
  getOneBuyer,
};
