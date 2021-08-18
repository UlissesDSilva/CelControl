import { Router } from 'express';
import { celulaController } from './controller/celulaController';
import { feedBackController } from './controller/feedBackController';
import { frequencyController } from './controller/frequencyController';
import { sessionController } from './controller/sessionController';
import { studentCelulaController } from './controller/studentCelulaController';
import { studentController } from './controller/studentController';

const routes = Router();

routes.post('/student', studentController.create);
routes.get('/student', studentController.index);
routes.get('/student-filter', studentController.getStudentsPerCourse);

routes.post('/session', sessionController.create);

routes.get('/frequency', frequencyController.index);
routes.patch('/frequency', frequencyController.createFrequency);

routes.post('/celula', celulaController.create);
routes.get('/celula/:celulaId', celulaController.show);
routes.get('/celula', celulaController.index);

routes.post('/celulaStudent', studentCelulaController.create);

routes.post('/feedback', feedBackController.create);
routes.get('/feedback', feedBackController.index);

export { routes };