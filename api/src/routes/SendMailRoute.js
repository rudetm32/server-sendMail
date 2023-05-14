import { Router } from "express"

import  { getSendEmail } from "../controllers/sendEmail.js"


const routes = Router();

routes.get("/", getSendEmail);


export default routes;