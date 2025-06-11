jest.mock('../src/app/controllers/userControllers.js', () => ({
  index: jest.fn((req, res) => {
    return res.status(200).json({ message: 'Mocked user data' });
  }),

  show: jest.fn((req, res) =>{
    return res.status(200).json({ message: 'Mocked user data' });
  }),

  create: jest.fn((req, res) =>{
    return res.status(201).json({ message: 'Mocked user data' });
  }),

  update: jest.fn((req, res) =>{
    return res.status(200).json({ message: 'Mocked user data' });
  }),

  destroy: jest.fn((req, res) =>{
    return res.status(200).json({ message: 'Mocked user data' });
  }),
}));


const request = require('supertest');
const userRoutes = require('../src/routes/userRoutes');
const express = require('express');
const userControllers = require('../src/app/controllers/userControllers');

const app = express();
app.use(express.json());
app.use('/', userRoutes);

describe('Testando rotas de Usuários', () =>{

    it('Testando a rota GET', async () =>{
        const response = await request(app).get('/usuarios');

        expect(response.status).toBe(200);
        expect(response.body).toEqual({ message: 'Mocked user data' });
        expect(userControllers.index).toHaveBeenCalled();
    });
    
    it('Testando rota GET:id',async () =>{
        const response = await request(app).get('/usuarios/123');
        
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ message: 'Mocked user data' });
        expect(userControllers.show).toHaveBeenCalled();
    });

    it('Testando a rota POST',async () =>{
        const response = await request(app).post('/usuarios').send(
          { nome: 'Test User', email: 'test@example.com', senha: 'teste123'}
        );

        expect(response.status).toBe(201);
        expect(response.body).toEqual({ message: 'Mocked user data' })
        expect(userControllers.create).toHaveBeenCalled();
    });

    it('Testando a rota PUT',async () =>{
        const response = await request(app).put('/usuarios/123');

        expect(response.status).toBe(200);
        expect(response.body).toEqual({ message: 'Mocked user data' });
        expect(userControllers.update).toHaveBeenCalled();
    })

    it('Testando a rota DELETE',async () =>{
        const response = await request(app).delete('/usuarios/123');

        expect(response.status).toBe(200);
        expect(response.body).toEqual({ message: 'Mocked user data' });
        expect(userControllers.destroy).toHaveBeenCalled();
    })
})