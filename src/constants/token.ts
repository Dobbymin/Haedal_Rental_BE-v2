import { SignOptions, sign } from 'jsonwebtoken';

import { PRIVATE_KEY } from './key';

const payload = {
  userId: '12',
  role: 'admin',
};

const options: SignOptions = {
  subject: 'haedal-rental',
  expiresIn: '1h',
  algorithm: 'RS256',
};

export const token = sign(payload, PRIVATE_KEY, options);
