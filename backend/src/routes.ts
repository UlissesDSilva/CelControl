import { Router } from 'express';
import { studentController } from './controller/studentController';

const routes = Router();

routes.post('/student/create', studentController.create);

export { routes };