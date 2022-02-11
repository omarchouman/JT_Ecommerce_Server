const {
  getAllCart,
  getCartById,
  addCart,
  updateCart,
  deleteCart,
} = require("../controllers/CartController");

const router = require("express").Router();

// GET ALL IN CART
router.get("/", getAllCart);

// GET CART BY ID
router.get("/find/:id", getCartById);

// ADD CART
router.post("/", addCart);

// UPDATE CART
router.put("/:id", updateCart);

// DELETE CART
router.delete("/:id", deleteCart);

module.exports = router;
