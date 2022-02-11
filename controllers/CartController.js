const Cart = require("../models/Cart");

// GET ALL IN CART
const getAllCart = async (req, res) => {
  try {
    const cart = await Cart.find();
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json(err);
  }
};

// GET CART BY ID
const getCartById = async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.id);
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json(err);
  }
};

// ADD CART
const addCart = async (req, res) => {
  const newCart = new Cart(req.body);
  try {
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  } catch (err) {
    res.status(500).json(err);
  }
};

// UPDATE CART
const updateCart = async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCart);
  } catch (err) {
    res.status(500).json(err);
  }
};

// DELETE CART
const deleteCart = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Cart has been deleted successfully!");
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { getAllCart, getCartById, addCart, updateCart, deleteCart };
