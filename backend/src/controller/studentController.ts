import { Request, Response } from 'express';
import { v4 as uuidV4 } from 'uuid';
import connection from '../database/connection';

export const studentController = {
  async create(req: Request, res: Response) {
    const { 
      matricula, 
      course, 
      password, 
      complementHours, 
      isFaciliator=false 
    } = req.body;
    
    try {
      const [id] = await connection('student')
        .insert({
          id_student: uuidV4(),
          matricula,
          course,
          password,
          complement_hours: complementHours,
          is_facilitator: isFaciliator
        }).returning('id_student');

      return res.status(201).json({ id });

    } catch(err) {
      console.log(err);
      return res.status(400).json({ message: 'Erro ao criar aluno' })
    }
  }
}