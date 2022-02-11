const {
  getAllOrders,
  getOrderByUserId,
  addOrder,
  updateOrder,
  deleteOrder,
  getMonthlyIncome,
} = require("../controllers/OrderController");

const router = require("express").Router();

// GET ALL ORDERS
router.get("/", getAllOrders);

// GET ORDER BY ID
router.get("/find/:userId", getOrderByUserId);

// ADD ORDER
router.post("/", addOrder);

// UPDATE ORDER
router.put("/:id", updateOrder);

// DELETE ORDER
router.delete("/:id", deleteOrder);

// GET MONTHLY INCOME
router.get("/income", getMonthlyIncome);

module.exports = router;
