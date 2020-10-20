import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Ecommerce from '../models/Ecommerce';

export default {
    async create(request: Request, response: Response) {
        const { name } = request.body;

        const ecommerceRepository = getRepository(Ecommerce);

        const data = { name };
        const ecommerce = ecommerceRepository.create(data);

        await ecommerceRepository.save(ecommerce);

        return response.status(201).json(ecommerce);
    },

    async getEcommerceById(id: number) {
        const ecommerceRepository = getRepository(Ecommerce);

        return await ecommerceRepository.findOne(id);
    }
}
