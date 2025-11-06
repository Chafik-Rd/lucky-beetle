import express, { Router } from "express";
import { createBeetle, getBeetles, updateBeetle } from "./beetle.controller";

const router: Router = express.Router();

router.post("/", createBeetle);
router.get("/", getBeetles);
router.put("/:beetleId", updateBeetle);

export default router;
