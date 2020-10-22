import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Order from '../models/Order';
import EcommerceController from '../controllers/EcommerceController';
import ProductController from '../controllers/ProductController';
import CustomerController from '../controllers/CustomerController';

export default {
    async create(request: Request, response: Response) {
        const {
            selectEcommerce,
            listProducts,
            requestDate,
            deliverDate,
            estimatedDeliverDate,
            status
        } = request.body;

        const ecommerce = await EcommerceController.getEcommerceById(selectEcommerce);
        const customer = await CustomerController.getCustomerById(1);
        const products = await ProductController.addProducts(listProducts);

        const orderRepository = getRepository(Order);

        const orderDate = new Date(requestDate);
        const deliveryDate = new Date(deliverDate);
        const estimatedDeliveryDate = new Date(estimatedDeliverDate);

        const data = {
            ecommerce,
            customer,
            products,
            orderDate,
            deliveryDate,
            estimatedDeliveryDate,
            status
        }

        const order = orderRepository.create(data);

        await orderRepository.save(order);

        return response.status(201).json(order);
    },

    async getOrdersByEcommerce(request: Request, response: Response) {
        const { id } = request.params;

        const orderRepository = getRepository(Order);

        const ecommerce = await EcommerceController.getEcommerceById(Number(id));
        const customer = await CustomerController.getCustomerById(1);

        const customerOrders = await orderRepository.find({
            relations: ['products'],
            where: [
                { ecommerce: ecommerce }
            ]
        });

        return response.json(customerOrders);
    },

    async getOrdersByParams(request: Request, response: Response) {
        const {
            ecommerceId,
            orderDate,
            estimatedDeliveryDate
         } = request.query;

        const orderRepository = getRepository(Order);

        const ecommerce = await EcommerceController.getEcommerceById(Number(ecommerceId));
        console.log(ecommerce)
        const orderDateFormat = orderDate ? new Date(String(orderDate)) : null;
        const estimatedDeliveryDateFormat = estimatedDeliveryDate ? new Date(String(estimatedDeliveryDate)) : null;

        const dateformated = `${orderDateFormat?.getFullYear()}-${orderDateFormat?.getMonth()}-${orderDateFormat?.getDate()}`;

        const filters = [];
        if ( ecommerce ) filters.push({ ecommerce: ecommerce });
        if ( orderDateFormat ) filters.push({ orderDate: orderDateFormat });
        if ( estimatedDeliveryDateFormat ) filters.push({ estimatedDeliveryDate: estimatedDeliveryDateFormat });

        const customerOrders = await orderRepository.find({
            relations: ['products'],
            where: filters
        });

        return response.json(customerOrders);
    }
}
