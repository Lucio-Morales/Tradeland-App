const { Buyer } = require("../../db");

const createBuyer = async (name, email, password) => {
  const buyer = await Buyer.create({ name, email, password });
  if (buyer) return { msg: "Registro del buyer exitoso", buyer };
};

const searchBuyer = async (id) => {
  const buyer = await Buyer.findByPk(id);
  if (buyer) return { msg: "Usuario encontrado", buyer };
};

module.exports = {
  createBuyer,
  searchBuyer,
};
