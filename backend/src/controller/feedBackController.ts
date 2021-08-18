import { Request, Response } from 'express';
import connection from '../database/connection';
import { v4 } from 'uuid';

export const feedBackController = {
  async index(req: Request, res: Response) {
    try {
      const response = await connection('feedback')
        .select('*');

      return res.status(200).json(response);
      
    } catch(err) {  
      return Promise.reject(err);
    }
  },
  
  async create(req: Request, res: Response) {
    const { text, name } = req.body;
    const { celula } = req.query;

    let randomName = name;

    if(!name.trim())
      randomName = v4();

    try {
      await connection('feedback')
        .insert({
          name: randomName,
          text,
          id_celula: Number(celula)
        })
      return res.status(201).json({ ok: 'Feedback criado' });
    } catch(err) {
      return Promise.reject(err);
    }
  },
}