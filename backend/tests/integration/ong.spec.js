
const request = require('supertest');
const app = require('../../src/app')
const connection = require('../../src/database/connection');   


describe('ONG', () => {
    beforeEach(async()=> {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async() => {
       await connection.destroy();
    });

    it('should be able to create a new ONG', async () =>{
       const response = await request(app)
       .post('/ongs')
       .send({
        name: "APA1",
        email: "contato@apad.org.br",
        whatsapp: "19991639810",
        city: "Campinas",
        uf: "Sp"
       }); //validação por supertest como desenvolvimento: npm install supertest -D
       
       expect(response.body).toHaveProperty('id');
       //expect(response.body.id).toHaveLenght(8);  verificar erro
       
    });

    //heroko - hospedar 
    //digitalocean - hospedar
    //netlify
    //gerar apk expo
    //estudo: ESLint, Prettier -> autenticação: JWT || Styled front
   
});