import { Request, Response } from 'express';
import connection from '../database/connection';

export const frequencyController = {
  async index(req: Request, res: Response) {
    const { celula } = req.query;
    
    try {
      const response = await connection('celula_student')
        .join('celula', 'celula.id_celula', 'celula_student.id_celula')
        .join('student', 'student.id_student', 'celula_student.id_student')
        .where('celula.id_celula', Number(celula))
        .select('celula.*', 'student.*');

      return res.json(response);

    } catch(err) {
      return Promise.reject(err);
    }
  },

  async createFrequency(req: Request, res: Response) {
    const { celulaId } = req.query;
    const { student, presency } = req.body;

    try {
      const [id] = await connection('frequency')
        .insert({
          id_student: student,
          id_celula: celulaId,
          date: new Date().toISOString(),
          presency
        }).returning('id_frequency');

      if(!id) return res.status(400).json({ error: 'Erro no servidor' });

      return res.status(201).json({ ok: 'Frequência atualizada' });
      
    } catch(err) {
      return res.status(400).json({ error: 'Impossivel criar frequência no momento!' });
    }
  }
}