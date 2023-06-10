import express from "express";
import {
  addCategory,
  getCategories,
  getCategory,
  getCategoryById,
  removeCategory,
  updateCategory,
} from "../controllers/category";
import checkPermisstion from "../middleware/checkPermisstion";

const router = express.Router();

router.get("/category", getCategories);
router.post("/category", checkPermisstion, addCategory);
router.put("/category/:id", checkPermisstion, updateCategory);
router.delete("/category/:id", checkPermisstion, removeCategory);
router.get("/category/:id", getCategory);
router.get("/categoryId/:id", getCategoryById);

export default router;
