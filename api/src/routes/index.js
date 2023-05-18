import { Router } from 'express';

import sendEmailRoutes from './sendRoute.js';


const routes = Router();


routes.use('/send', sendEmailRoutes);


export default routes;