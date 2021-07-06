import connection from "../../src/database/connection";
import { app } from '../../src/server';
import request from 'supertest';

describe('student', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('should be create a login', async() => {
    const response = await request(app)
      .post('/student')
      .send({
        matricula: "67567567",
        course: "Engenharia de Software",
        password: "68767",
        complementHours: "5",
        isFacilitator: false,
        name: "João Victor",
        login: "jv"
      })
    expect(response.status).toEqual(201);
  });

  it('should be return all students of Engenharia', async() => {
    const response = await request(app)
      .get('/student-filter?course=Engenharia');
    expect(response.status).toEqual(200);
  })
})