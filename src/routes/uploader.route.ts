/**
 *
 * RUTA '/upload'
 *
 */

import express from "express";
import controller from "../controllers/uploader.controller";
const router = express.Router();
import multer from "../middlewares/multer-config";

router.post("/image", multer, controller.postImage);

router.get("/src/image/:image", controller.getImageUrl);

export = router;
