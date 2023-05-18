import { Router } from 'express';

import sendEmailRoutes from './SendMailRoute.js';


const routes = Router();


routes.use('/send', sendEmailRoutes);


export default routes;