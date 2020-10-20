import { Router } from 'express';
import CustomerController from './controllers/CustomerController';

import EcommerceController from './controllers/EcommerceController';
import OrderController from './controllers/OrderController';
import ProductController from './controllers/ProductController';

const routes = Router();

routes.post('/ecommerce/add', EcommerceController.create);

routes.post('/order/add', OrderController.create);

routes.post('/product/add', ProductController.create);

routes.post('/customer/add', CustomerController.create);
routes.get('/customer/getOrdersByEcommerce/:id', CustomerController.getOrdersByEcommerce);


export default routes;
