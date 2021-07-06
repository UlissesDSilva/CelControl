import { Router } from 'express';
import { studentController } from './controller/studentController';

const routes = Router();

routes.post('/student', studentController.create);
routes.get('/student', studentController.index);
routes.get('/student-filter', studentController.getStudentsPerCourse);

export { routes };