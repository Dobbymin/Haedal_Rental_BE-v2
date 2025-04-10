import { Request, RequestHandler, Response } from 'express';

import bcrypt from 'bcrypt';

import { searchUser } from '../../../mock';
import { createSession, generateAccessToken, generateRefreshToken } from '../service';

export const handleUserLogin: RequestHandler = async (req: Request, res: Response) => {
  const { id, password } = req.body;

  const user = searchUser(id);

  if (!user || !(await bcrypt.compare(password, user.password))) {
    // 아이디 또는 비밀번호가 DB에 없다면 404 Not Found
    res.status(404).send('아이디 또는 비밀번호가 잘못되었습니다.');
  }

  const session = createSession(user.role);

  const accessToken = generateAccessToken({
    userId: user.userId,
    role: user.role,
  });

  const refreshToken = generateRefreshToken();

  res.setHeader('Authorization', `Bearer ${accessToken}`);
  res.setHeader('Refresh-Token', refreshToken);

  res.status(200).send(session);
};
