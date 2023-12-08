const { buyerServices } = require("../../services");
const { sellerServices } = require("../../services");
const { userServices } = require("../../services");

const registerUser = async (req, res) => {
  try {
    const { type, name, email, password } = req.body;
    // const userType = type;
    const response =
      type === "Buyer"
        ? await buyerServices.createBuyer(type, name, email, password)
        : await sellerServices.createSeller(type, name, email, password);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const response = await userServices.accessLogin(email, password);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { registerUser, userLogin };
