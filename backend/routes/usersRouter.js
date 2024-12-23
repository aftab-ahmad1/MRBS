var express = require("express");
var path = require("path"); // Required for file extension validation
var router = express.Router();
const {
  create,
  getAll,
  get,
  update,
  remove,
} = require("../controllers/userController");
const {
  createUser,
  updateUser,
  removeUser,
  getUser,
  getUsers,
} = require("../validations/userValidator");
const multer = require("multer"); // Import Multer for file upload

// Configure Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Save uploaded images in the "uploads" folder
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Generate a unique filename
  },
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
      return cb(new Error("Only images are allowed")); // Validate file type
    }
    cb(null, true);
  },
});

/* User Routes */

// router.post("/create", upload.single("picture"), createUser, create);
router.post("/create", createUser, create);

// Route for getting all users
router.get("/get-all", getUsers, getAll);

// Route for getting a single user
router.get("/get", getUser, get);

// Route for updating a user
router.put("/update", updateUser, update);

// Route for deleting a user
router.delete("/delete", removeUser, remove);

module.exports = router;
