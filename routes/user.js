const { updateUser } = require("../controllers/UserController");
const {
  verifyToken,
  verifyTokenAndAuthorization,
} = require("../middlewares/verifyToken");

const router = require("express").Router();

//UPDATE USER
router.put("/:id", verifyTokenAndAuthorization, updateUser);

module.exports = router;
