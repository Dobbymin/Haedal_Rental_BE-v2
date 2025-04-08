import express, { Express, Request, Response } from 'express';

const app: Express = express();

const PORT: number = 8080;

//Express 4.16.0버전 부터 body-parser의 일부 기능이 익스프레스에 내장 body-parser 연결
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.get('/', (_req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
