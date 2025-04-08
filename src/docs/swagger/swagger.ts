import swaggereJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      version: '2.0.0',
      title: '해달 대여장부 API',
      description: '해달 대여장부 API 문서',
    },
    servers: [
      {
        url: 'http://localhost:8080', // 요청 URL
      },
    ],
  },
  apis: ['../src/routers/*.js', '../src/routers/user/*.js'], //Swagger 파일 연동
};

const specs = swaggereJsdoc(options);

// module.exports = { swaggerUi, specs };

export { swaggerUi, specs };
