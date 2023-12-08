const { Seller } = require("../../db");

const createSeller = async (type, name, email, password) => {
  const seller = await Seller.create({ type, name, email, password });
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
