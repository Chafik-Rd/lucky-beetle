import express, { Router } from "express";
import { createBeetle, getBeetles } from "./beetle.controller";

const router: Router = express.Router();

router.post("/", createBeetle);
router.get("/", getBeetles);

export default router;
