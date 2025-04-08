import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'HAEDAL-RENTAL API',
      description: '해달 동아리 물품 대여 서비스 백엔드 API',
      version: 'v2.0.0',
    },
    servers: [
      {
        url: 'http://3.37.221.110:8080/',
        description: 'Develop Server',
      },
      {
        url: 'http://localhost:8080/',
        description: 'Local Server',
      },
    ],
  },
  apis: ['./*.swagger.ts', './swagger/*'],
};

const specs = swaggerJsdoc(options);

export { specs, swaggerUi };
