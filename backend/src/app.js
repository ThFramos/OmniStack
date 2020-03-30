    /*notas:
        rota / recurso

        request: guarda dados atraves da requisição do usuario

        response: envia dados atraves da requisição

    */

    /*
    Métodos HTTP:
    GET: buscar informação do back-end
    POST: criar informação no back-end
    PUT: alterar informação no back-end
    DELETE: deleta informações no back-end

    */

    /*
    Tipos de parâmetros:
    Query: Parâmetros nomeados enviados na rota após o simbolo "?" (filtros,paginação) 
    Route: Parâmetros usados para identificar recursos após simbolo ":"
    Body: corpo da requisição, utilizado para criar ou alterar recursos
    */

    /** 
     * SQL: MySQL, SQLite, PostgreSQL, ORACLE, Microsoft SQL Server
     * NoSQL: MongoDB, CouchDB, etc 
    */

    /**
     * Driver: SELECT * FROM users
     * Query Builder: table ('users').select('*').where
     */



const express = require('express');
const cors = require('cors'); 
const {errors} = require('celebrate');
const routes = require('./routes'); // importando rotas (./pasta)
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());
 
module.exports = app;


