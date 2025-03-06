const express = require('express');
const app = express();
const port = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: false })); 

const db_M = require('./database');
global.db_pool = db_M.pool;

    const individualsR = require('./individualsRoutes');
    const readingsR = require('./readingsRoutes');

    app.use('/individuals', individualsR);
    app.use('/readings', readingsR);


const swaggerAutogen = require('swagger-autogen')();
const swaggerUi = require('swagger-ui-express');

const doc = {
    info: {
        title: 'Blood Pressure Monitor API',
        description: 'API for tracking blood pressure measurements.'
    },
    host: `localhost:${port}`
};

const swaggerOutputFile = './swagger-output.json';
const routes = ['./index.js'];

swaggerAutogen(swaggerOutputFile, routes, doc).then(() => {
    const swaggerDocument = require(swaggerOutputFile);
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


});
    

   
    app.listen(port, () => {
        console.log(` Server running on http://localhost:${port}`);
    });
