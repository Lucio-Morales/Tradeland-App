const { sellerServices } = require("../../services");

const postSeller = async (req, res) => {
  try {
    const { type, name, email, password } = req.body;
    const response = await sellerServices.createSeller(
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

const getOneSeller = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await sellerServices.searchSeller(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  postSeller,
  getOneSeller,
};
