import { Express } from 'express';

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
        url: 'http://3.37.221.110/',
        description: 'Develop Server',
      },
      {
        url: 'http://localhost:8080/',
        description: 'Local Server',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ['./*.swagger.ts', './swagger/*'],
};

const specs = swaggerJsdoc(options);

export const setupSwagger = (app: Express) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

  // JSON 명세 보기용
  app.get('/swagger.json', (_, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(specs);
  });

  // // Redirect /swagger-ui to the Swagger UI
  // app.get('/swagger-ui', (_, res) => {
  //   res.redirect('/swagger-ui/');
  // });
};
