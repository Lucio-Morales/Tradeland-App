const { storeServices } = require("../../services");

const postStore = async (req, res) => {
  const { userId, name, category, phone } = req.body;
  try {
    const response = await storeServices.createStore(
      userId,
      name,
      category,
      phone
    );
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { postStore };
