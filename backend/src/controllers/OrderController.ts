import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Order from '../models/Order';
import EcommerceController from '../controllers/EcommerceController';
import ProductController from '../controllers/ProductController';

export default {
  async create(request: Request, response: Response) {
    const {
        ecommerceId,
        listProducts
    } = request.body;

    const ecommerce = await EcommerceController.getEcommerceById(ecommerceId);
    const products = await ProductController.addProducts(listProducts);

    const orderRepository = getRepository(Order);

    const data = {
        ecommerce,
        products
    }

    const order = orderRepository.create(data);

    await orderRepository.save(order);

    return response.status(201).json(order);
  }
}
