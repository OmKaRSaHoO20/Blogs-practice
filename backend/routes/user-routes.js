import { getAllUser, login, signup } from "../controllers/user-controller.js";

import express from "express";

const router = express.Router();

router.get("/", getAllUser);
router.post("/signup", signup);
router.post("/login", login);

export default router;