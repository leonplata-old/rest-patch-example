const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const swagger = require('swagger-tools');
const swaggerObject = yaml.safeLoad(fs.readFileSync(path.join(__dirname, '../api/swagger/swagger.yaml'), 'utf8'));

const API_ROUTE = '/api';
const CONTROLLERS_PATH = './controllers';

function swaggerSetup(expressInstance) {
    return new Promise((resolve, reject) => {
        swagger.initializeMiddleware(swaggerObject, middleware => {
            try {
                expressInstance.use(middleware.swaggerMetadata());
                expressInstance.use(API_ROUTE, middleware.swaggerRouter({ useStubs: true, controllers: CONTROLLERS_PATH }));
                expressInstance.use(middleware.swaggerUi());
                resolve(middleware);
            } catch (err) {
                reject(err);
            }
        });
    });
}

module.exports = swaggerSetup;