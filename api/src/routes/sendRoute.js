import { Router } from "express";

import  { getSendEmail } from "../controllers/sendController.js";


const routes = Router();


routes.post("/", getSendEmail);


export default routes;