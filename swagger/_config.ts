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
        url: 'http://localhost:8080/',
        description: 'Local Server',
      },
      {
        url: 'http://test.co.kr/',
        description: 'Test Server',
      },
      {
        url: 'http://real.co.kr/',
        description: 'Real Server',
      },
    ],
  },
  apis: ['./*.swagger.ts', './swagger/*'],
};

const specs = swaggerJsdoc(options);

export { specs, swaggerUi };
