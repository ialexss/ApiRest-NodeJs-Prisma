import { prisma } from "../db/db.js";

const getAllCategories = async () => {
  try {

    const categories = await prisma.category.findMany({
      include: {
        products: true,
      },
    });
    return categories;

  } catch (error) {
    throw new Error("An error occurred while fetching categories.");
  }
};

const getOneCategory = async (id) => {
  try {

    const categoryFound = await prisma.category.findFirst({
      where: {
        id: parseInt(id),
      },
      include: {
        products: true,
      },
    });
    return categoryFound;

  } catch (error) {
    throw new Error("An error occurred while fetching the category.");
  }
};

const createNewCategory = async (data) => {
  try {

    const newCategory = await prisma.category.create({
      data: data,
    });
    return newCategory;

  } catch (error) {
    throw new Error("An error occurred while creating the category.");
  }
};

const deleteCategory = async (id) => {
  try {

    const categoryDeleted = await prisma.category.delete({
      where: {
        id: parseInt(id),
      },
    });
    return categoryDeleted;

  } catch (error) {
    throw new Error("An error occurred while deleting the category.");
  }
};

const updateCategory = async (id, data) => {
  try {

    const categoryUpdate = await prisma.category.update({
      where: {
        id: parseInt(id),
      },
      data: data,
    });
    return categoryUpdate;

  } catch (error) {
    throw new Error("An error occurred while updating the category.");
  }
};

export default {
  getAllCategories,
  getOneCategory,
  createNewCategory,
  deleteCategory,
  updateCategory
};