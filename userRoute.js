import { Data, fetch, login, register } from "./userController.js";
import express from "express";
const router = express.Router();

router.post("/Scholorship", Data);
router.get("/fetch", fetch);
router.post("/Admin-login", login);
router.post("/Admin-register", register);

export default router;
