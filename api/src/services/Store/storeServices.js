const { Store } = require("../../db");

const createStore = async (userId, name, category, phone) => {
  try {
    const newStore = await Store.create({
      name,
      category,
      phone,
      sellerId: userId,
    });

    return { msg: "Se ha creado la tienda", newStore };
  } catch (error) {
    return { error: "Error al crear la tienda", details: error.message };
  }
};

module.exports = { createStore };
