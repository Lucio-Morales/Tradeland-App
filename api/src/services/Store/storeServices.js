const { Store } = require("../../db");

//Recibe propiedades y crea una store.
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

//Recibe el id de un seller y busca todas sus stores.
const searchStores = async (sellerId) => {
  const stores = await Store.findAll({ where: { sellerId: sellerId } });
  if (stores) return stores;
};

module.exports = { createStore, searchStores };
