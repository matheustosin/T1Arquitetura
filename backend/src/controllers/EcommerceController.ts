import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';

import Ecommerce from '../models/Ecommerce';

export default {
    async create(request: Request, response: Response) {
        const { name } = request.body;

        const schemaRequest = Yup.object().shape({
            name: Yup.string().required()
        });

        await schemaRequest.validate(request.body, {
            abortEarly: false
        });

        const ecommerceRepository = getRepository(Ecommerce);

        const data = { name };
        const ecommerce = ecommerceRepository.create(data);

        await ecommerceRepository.save(ecommerce);

        return response.status(201).json(ecommerce);
    },

    async getEcommerceById(id: number) {
        const schemaRequest = Yup.number().required()

        await schemaRequest.validate(id, {
            abortEarly: false
        });
        const ecommerceRepository = getRepository(Ecommerce);

        const ecommerce = await ecommerceRepository.findOne(id);

        return ecommerce;
    },

    async index(request: Request, response: Response) {
        const ecommerceRepository = getRepository(Ecommerce);

        const ecommerces = await ecommerceRepository.find();

        return response.json(ecommerces);
    }
}
