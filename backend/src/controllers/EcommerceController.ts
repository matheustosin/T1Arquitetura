import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Ecommerce from '../models/Ecommerce';

export default {
  async create(resquest: Request, response: Response) {
    const { name } = resquest.body;

    const ecommerceRepository = getRepository(Ecommerce);

    const data = { name };
    const ecommerce = ecommerceRepository.create(data);

    await ecommerceRepository.save(ecommerce);

    return response.status(201).json(ecommerce);
  }
}
