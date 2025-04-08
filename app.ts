import express, { Express, Request, Response } from 'express';

import { ITEMS_MOCK } from './src/mock';
import { specs, swaggerUi } from './swagger';

const app: Express = express();

const PORT: number = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/swagger-ui', swaggerUi.serve, swaggerUi.setup(specs));

app.get('/', (_req: Request, res: Response) => {
  res.send('반갑습니다! 해달 동아리 물품 대여 서비스 API입니다.');
});

app.get('/admin/itemList', (_req: Request, res: Response) => {
  res.send([...ITEMS_MOCK]);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
