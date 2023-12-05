const { Category } = require("../../db");

const createCategory = async (name) => {
  const newCategory = await Category.create({ name });
  if (newCategory) return { msg: "Categoria creada con exito", newCategory };
};
const allCategories = async () => {
  const allCategories = await Category.findAll();
  if (allCategories) return allCategories;
};

module.exports = {
  createCategory,
  allCategories,
};
