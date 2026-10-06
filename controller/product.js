import Product from "../model/product.js";
import { verifyJWT } from "../utils/jwt.js";

const getProductsController = async (req, res) => {
  try {
    const token = req.query.token;
    if (!token) {
      return res.status(401).json({error: "Token required"});
    }
    const decoded = verifyJWT(token);
    if (!decoded) {
      return res.status(401).json({error: "Invalid Token"});
    }
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products" });
  }
};

const saveProductController = async (req, res) => {
  try {
    const newProductFields = req.body;
    const newProduct = new Product(newProductFields);
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: "Error saving product" });
  }
};

const updateProductController = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProductFields = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      updatedProductFields,
      { new: true }
    );
    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(updatedProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error updating product" });
  }
};

const deleteProductController = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting product" });
  }
};

export {
  getProductsController,
  saveProductController,
  updateProductController,
  deleteProductController,
};