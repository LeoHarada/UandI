import express from "express";
import {
    followUnfollow,
    getUserProfile,
    loginUser,
    logoutUser,
    signupUser,
    updateUser,
} from "../controllers/userController.js";
import protectRoute from "../middlewares/protectRoute.js";

const router = express.Router();

router.get("/profile/:username", getUserProfile);
router.post("/signup", signupUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.post("/follow/:id", protectRoute, followUnfollow);
router.post("/update/:id", protectRoute, updateUser);

export default router;