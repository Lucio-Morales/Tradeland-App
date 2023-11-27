const { Seller } = require("../../db");

const createSeller = async (name, email) => {
  const seller = await Seller.create({ name, email });
  if (seller) return { msg: "Seller creado con exito", seller };
};

const searchSeller = async (id) => {
  const seller = await Seller.findByPk(id);
  if (seller) return { msg: "Seller encontrado", seller };
};

module.exports = {
  createSeller,
  searchSeller,
};
