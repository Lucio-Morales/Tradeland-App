const { Category } = require("../../db");

const createCategory = async (name) => {
  const newCategory = await Category.create({ name });
  if (newCategory) return { msg: "Categoria creada con exito", newCategory };
};

module.exports = {
  createCategory,
};
