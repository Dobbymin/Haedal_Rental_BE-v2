import { Express } from 'express';

import { handleUserCreate, handleUserLogin } from '../../apis';

export const router = (app: Express) => {
  app.post('/api/auth/signup', handleUserCreate);
  app.post('/api/auth/login', handleUserLogin);
};
