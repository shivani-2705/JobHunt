import express from "express";
import {isAuthorized} from "../middlewares/auth.js"
import { employerGetAllApplication, jobSeekerDeleteApplication, jobSeekerGetAllApplication, postApplication } from "../controllers/applicationController.js";

const router = express.Router();
router.post("/post" , isAuthorized, postApplication);
router.get("/employer/getall" , isAuthorized, employerGetAllApplication );
router.get("/jobseeker/getall" , isAuthorized , jobSeekerGetAllApplication );
router.delete("/delete/:id" , isAuthorized , jobSeekerDeleteApplication );

export default router ;