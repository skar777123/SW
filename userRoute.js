import {
  Data,
  deleteUser,
  fetch,
  login,
  register,
  File,
  Approve,
} from "./userController.js";
import express from "express";
const router = express.Router();

router.post("/Scholorship", Data);
router.get("/fetch", fetch);
router.post("/Admin-login", login);
router.post("/Admin-register", register);
router.post("/delete", deleteUser);
router.get("/csv", File);
router.post("/approve", Approve);
export default router;
