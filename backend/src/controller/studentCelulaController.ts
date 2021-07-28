import { Request, Response } from 'express';
import connection from '../database/connection';

export const studentCelulaController = {
  async create(req: Request, res: Response) {
    const { student, celula } = req.body;

    try {
      await connection('celula_student')
        .insert({ 
          id_student: student,
          id_celula: celula
         });

      return res.status(201).json({ success: 'Adicionado a célula com sucesso' });
    } catch(err) {
      return res.status(400).json({ error: 'Não foi possível adicionar este usuário a célula indicada!' });
    }
  }
};