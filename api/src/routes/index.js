import { Router } from 'express';

import sendRoute from './sendRoute.js';


const routes = Router();


routes.use('/send', sendRoute);


export default routes;