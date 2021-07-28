import { Request, Response } from 'express';
import connection from '../database/connection';

export const sessionController = {
  async create(req: Request, res: Response) {
    const { matricula, password } = req.body;

    try { 
      const response = await connection('student')
        .where('matricula', matricula)
        .where('password', password)  
        .select()
        .first();

      if(!response) 
        return res.status(404).json({ error: 'Não foi encontrado usuário correspondente!' });
      
      const id = response.id_student;

      return res.status(200).json({ id });
        
    } catch(err) {
      return Promise.reject(err);
    }
  }
};