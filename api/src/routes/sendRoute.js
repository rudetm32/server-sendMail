import { Router } from "express";

import  { postWelcome} from "../controllers/sendController.js";


const routes = Router();


routes.post("/", postWelcome);


export default routes;