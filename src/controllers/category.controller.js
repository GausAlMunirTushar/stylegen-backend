import Category from "../models/category.model.js";

export const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    if (!categories) {
      return res.status(404).json({ message: "No categories found" });
    }
    res.status(200).json({
      message: "Categories retrieved successfully",
      categories,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createCategory = async (req, res) => {
  try {
    const { name, description } = req.body;
    if (!name) {
      return res.status(400).json({ message: "Name is required" });
    }
    const category = await Category.create({ name, description });
    res.status(201).json({
      message: "Category created successfully",
      category,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getCategoryById = async (req, res) => {
  const { id } = req.params;

  try {
    const category = await Category.find({ _id: id });
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.status(200).json({
      message: "Category retrieved successfully",
      category,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteCategory = async (req, res) => {
  const { id } = req.params;

  try {
    const category = await Category.findByIdAndDelete(id);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.status(200).json({
      message: "Category deleted successfully",
      category,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
