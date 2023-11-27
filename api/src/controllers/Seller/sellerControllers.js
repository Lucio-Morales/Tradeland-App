const { sellerServices } = require("../../services");

const postSeller = async (req, res) => {
  try {
    const { name, email } = req.body;
    const response = await sellerServices.createSeller(name, email);
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
