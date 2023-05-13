import { Router } from 'express';

import sendEmailRoutes from './SendMailRoute.js';

const routes = Router();

routes.use('/', sendEmailRoutes)


export default routes
