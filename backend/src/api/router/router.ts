import express, { Router } from "express";
import beetleRouter from "../beetle/beetle.route";

const router: Router = express.Router();

router.use("/beetles", beetleRouter);

export default router;
