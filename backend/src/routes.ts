import { Router } from 'express';
import CustomerController from './controllers/CustomerController';

import EcommerceController from './controllers/EcommerceController';
import OrderController from './controllers/OrderController';
import ProductController from './controllers/ProductController';

const routes = Router();

routes.post('/ecommerce/add', EcommerceController.create);

routes.post('/order/add', OrderController.create);
routes.get('/order/getOrdersByEcommerce/:id', OrderController.getOrdersByEcommerce);

routes.post('/product/add', ProductController.create);

routes.post('/customer/add', CustomerController.create);


export default routes;
