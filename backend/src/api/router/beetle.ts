import express, { Router } from "express";
import { getBeetles } from "../controllers/beetle";

const router: Router = express.Router();

router.get("/",getBeetles);

export default router;
