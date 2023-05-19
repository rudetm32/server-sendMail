import { Router } from "express";

import  {  postNotify} from "../controllers/sendController.js";


const routes = Router();


routes.post("/", postNotify);


export default routes;