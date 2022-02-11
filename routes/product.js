const {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/ProductController");

const router = require("express").Router();

// GET ALL PRODUCTS
router.get("/", getAllProducts);

// GET PRODUCT BY ID
router.get("/find/:id", getProductById);

// ADD PRODUCT
router.post("/", addProduct);

// UPDATE PRODUCT
router.put("/:id", updateProduct);

// DELETE PRODUCT
router.delete("/:id", deleteProduct);

module.exports = router;
