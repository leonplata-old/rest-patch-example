
const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const promisify = require('./utils/promisify');
const express = require('express');
const swagger = require('swagger-tools');

const swaggerObject = yaml.safeLoad(fs.readFileSync(path.join(__dirname, './api/swagger/swagger.yaml'), 'utf8'));
const app = express();
const PORT = 3000;

swagger.initializeMiddleware(swaggerObject, function (middleware) {
    app.use(middleware.swaggerMetadata());
    app.use(middleware.swaggerValidator({ validateResponse: true }));
    app.use('/api', middleware.swaggerRouter({ useStubs: true, controllers: './controllers' }));
    app.use(middleware.swaggerUi());
    app.listen(PORT, () => console.log(`Listening at port ${PORT}`));
});