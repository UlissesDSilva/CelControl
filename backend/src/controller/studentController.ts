import { Request, Response } from 'express';
import { v4 as uuidV4 } from 'uuid';
import connection from '../database/connection';

export const studentController = {
  async create(req: Request, res: Response) {
    const { 
      name,
      login,
      matricula, 
      course, 
      password, 
      complementHours, 
      isFacilitator=false 
    } = req.body;
    
    try {
      const [id] = await connection('student')
        .insert({
          id_student: uuidV4(),
          matricula,
          name, 
          login,
          course,
          password,
          complement_hours: complementHours,
          is_facilitator: isFacilitator
        }).returning('id_student');

      return res.status(201).json({ id });

    } catch(err) {
      return res.status(400).json({ message: 'Erro ao criar aluno' })
    }
  },

  async index(req: Request, res: Response) {
    try {
      const response = await connection('student')
        .select('*');

      return res.json(response);
    } catch(err) {
      throw new Error(err);
    }
  },

  async getStudentsPerCourse(req: Request, res: Response) {
    const { course } = req.query;
    
    try {
      const response = await connection('student')
        .where('course', 'like', `%${String(course)}%`)
        .select('*');
      
      return res.json(response);
    } catch(err) {
      throw new Error(err);
    }
  },

  async getAllParticipantsFromSpecificCelula(req: Request, res: Response) {
    
  },
}