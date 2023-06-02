import { Router } from "express";
import { getProjects } from "../controllers/products.controller.js";


const router = Router()

router.get('/products', getProjects);

export default router;