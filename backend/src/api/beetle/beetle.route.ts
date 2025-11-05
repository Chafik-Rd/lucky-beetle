import express, { Router } from "express";
import { getBeetles } from "./beetle.controller";

const router: Router = express.Router();

router.get("/", getBeetles);

export default router;
