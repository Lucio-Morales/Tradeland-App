const { buyerServices } = require("../../services");
const { sellerServices } = require("../../services");

const registerUser = async (req, res) => {
  try {
    const { type, name, email, password, rut } = req.body;
    const userType = type;
    const response =
      userType === "buyer"
        ? await buyerServices.createBuyer(name, email, password)
        : await sellerServices.createSeller(name, email, password, rut);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { registerUser };
