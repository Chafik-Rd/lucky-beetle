import express, { Router } from "express";
import beetlesRouter from "./beetle";

const router: Router = express.Router();

router.use("/beetles", beetlesRouter);

export default router;
