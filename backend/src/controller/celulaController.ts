import { Request, Response } from 'express';
import connection from '../database/connection';

export const celulaController = {
  async create(req: Request, res: Response) {
    const { name, description, diasCelulas, hours } = req.body;
    
    try {
      const [id] = await connection('celula')
        .insert({
          name,
          description,
          dias_celulas: diasCelulas,
          hours
        }).returning('id_celula');

      return res.status(201).json({ id });
    } catch(err) {
      return Promise.reject(err);
    }
  },

  async show(req: Request, res: Response) {
    const { celulaId } = req.params;
    
    try { 
      const response = await connection('celula')
        .select('*')
        .where('id_celula', celulaId)
        .first();

      return res.status(200).json(response);
      
    } catch(err) {
      return Promise.reject(err);
    }
  },

  async index(req: Request, res: Response) {
    try {
      const response = await connection('celula')
        .select('*');

      return res.status(200).json(response);
      
    } catch(err) {  
      return Promise.reject(err);
    }
  } 
}