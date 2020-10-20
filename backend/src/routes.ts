import { Router } from 'express';

import EcommerceController from './controllers/EcommerceController';

const routes = Router();

routes.post('/ecommerce/add', EcommerceController.create);

export default routes;