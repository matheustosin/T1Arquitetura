import { request, Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Customer from '../models/Customer';

export default {
    async create(request: Request, response: Response) {
        const { name } = request.body;

        const customerRepository = getRepository(Customer);

        const data = { name };
        const customer = customerRepository.create(data);

        await customerRepository.save(customer);

        return response.status(201).json(customer);
    },

    async getOrdersByEcommerce(request: Request, response: Response) {
        const { id } = request.params;

        const customerRepository = getRepository(Customer);
        // const customerOrders = customerRepository.find({
        //     cache: true,
        //     relations: ['orders'],
        //     where: [
        //         { "orders.ecommerce_id =: id": String, id },
        //     ]
        // });

        return response.json("TESTE");
    }
}
