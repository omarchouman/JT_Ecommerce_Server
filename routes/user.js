const {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/UserController");

const router = require("express").Router();

//GET ALL USERS
router.get("/", getAllUsers);

//GET USER BY ID
router.get("/find/:id", getUserById);

//UPDATE USER
router.put("/:id", updateUser);

//DELETE USER
router.delete("/:id", deleteUser);

module.exports = router;
