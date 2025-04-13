import express, { Express, Request, Response } from 'express';

import cors from 'cors';
import dotenv from 'dotenv';

import { router } from './src/routes';
import { setupSwagger } from './swagger';

dotenv.config();

const app: Express = express();

const PORT: number = 8080;

// json 포맷을 해독하기 위해 사용하는 미들웨어
app.use(express.json());

// x-www-form-urlencoded 포맷을 해독하기 위해 사용하는 미들웨어
app.use(express.urlencoded({ extended: false }));

// cors 설정
app.use(
  cors({
    //   credentials: true,
    origin: ['http://haedal-rental.s3-website.ap-northeast-2.amazonaws.com', 'http://localhost:5173'],
  })
);

// Swagger 설정 적용
setupSwagger(app);

// 메인 페이지
app.get('/', (_req: Request, res: Response) => {
  res.send('반갑습니다! 해달 동아리 물품 대여 서비스 API입니다.');
});

const main = async () => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  router(app);
};

main();
