import express from "express";
import controller from "../controllers/Product";
import { Schemas, ValidateJoi } from "../middleware/Joi";

const router = express.Router();

router.post("/", ValidateJoi(Schemas.product.create), controller.createProduct);
router.get("/:productId", controller.readProduct);
router.get("/", controller.readAll);
router.patch("/:productId", ValidateJoi(Schemas.product.update), controller.updateProduct);
router.delete("/:productId", controller.deleteProduct);

export = router;
