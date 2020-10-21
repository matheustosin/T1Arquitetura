import { request, Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Customer from '../models/Customer';
import Order from '../models/Order';

export default {
    async create(request: Request, response: Response) {
        const { name } = request.body;

        const customerRepository = getRepository(Customer);

        const data = { name };
        const customer = customerRepository.create(data);

        await customerRepository.save(customer);

        return response.status(201).json(customer);
    },

    async getCustomerById(id: number) {
        const customerRepository = getRepository(Customer);

        return await customerRepository.findOne(id);
    }
}
