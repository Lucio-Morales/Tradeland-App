const { buyerServices } = require("../../services");
const { sellerServices } = require("../../services");
const { userServices } = require("../../services");

const registerUser = async (req, res) => {
  try {
    const { userType, name, email, password } = req.body;
    // const userType = type;
    const response =
      userType === "Buyer"
        ? await buyerServices.createBuyer(userType, name, email, password)
        : await sellerServices.createSeller(userType, name, email, password);
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
