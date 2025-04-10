import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import { redisClient } from '../../../utils';

const secret = process.env.SECRET || 'default_secret';

type Payload = {
  userId: number;
  role: string;
};

/** Access Token 생성 */
export const generateAccessToken = (user: Payload) => {
  const payload = {
    userId: user.userId,
    role: user.role,
  };

  return jwt.sign(payload, secret, {
    algorithm: 'HS256',
    // Access Token 유효기간
    expiresIn: '1h',
    subject: 'haedal-rental',
  });
};

/** Access Token 검증 */
export const validateAccessToken = (token: string) => {
  try {
    const decoded = jwt.verify(token, secret) as Payload;
    return {
      ok: true,
      id: decoded.userId,
      role: decoded.role,
    };
  } catch (err) {
    console.error('JWT Verify Error:', err);
    return {
      ok: false,
      message: (err as Error).message,
    };
  }
};

/** Refresh Token 생성 */
export const generateRefreshToken = () => {
  return jwt.sign({}, secret, {
    algorithm: 'HS256',
    // Refresh Token 유효기간
    expiresIn: '14d',
  });
};

/** Refresh Token 검증 */
export const validateRefreshToken = async (token: string, userId: string) => {
  const getAsync = promisify(redisClient.get).bind(redisClient);

  try {
    const storedToken = await getAsync(userId);
    if (token === storedToken) {
      try {
        jwt.verify(token, secret);
        return true;
      } catch (err) {
        console.error('Refresh Token Expired or Invalid:', err);
        return false;
      }
    } else {
      console.warn(`Refresh token mismatch for user ${userId}`);
      return false;
    }
  } catch (err) {
    console.error('Redis Error in validateRefreshToken:', err);
    return false;
  }
};
