const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Movies and Shows API',
        description: 'API for Movies and Premium Shows'
    },
    host: //[
        // 'localhost:8000',
        'localhost:8000',
    //],
    schemes: ['https', 'http']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];


// This generates swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);