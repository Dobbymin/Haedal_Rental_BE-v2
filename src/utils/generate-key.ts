import crypto from 'crypto';
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config();

const PRIVATE_KEY_PATH = './private_key.pem';
const PUBLIC_KEY_PATH = './public_key.pem';

const generateKeys = () => {
  if (fs.existsSync(PRIVATE_KEY_PATH) && fs.existsSync(PUBLIC_KEY_PATH)) {
    // 기존 키가 있다면 불러오기
    const privateKey = fs.readFileSync(PRIVATE_KEY_PATH, 'utf-8');
    const publicKey = fs.readFileSync(PUBLIC_KEY_PATH, 'utf-8');

    return { privateKey, publicKey };
  } else {
    // 없으면 새로 생성하고 파일에 저장
    const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
      modulusLength: 4096,
      publicKeyEncoding: { type: 'spki', format: 'pem' },
      privateKeyEncoding: { type: 'pkcs8', format: 'pem', cipher: 'aes-256-cbc', passphrase: 'top secret' },
    });

    fs.writeFileSync(PRIVATE_KEY_PATH, privateKey);
    fs.writeFileSync(PUBLIC_KEY_PATH, publicKey);

    return { privateKey, publicKey };
  }
};

export const { privateKey, publicKey } = generateKeys();

// 암호화
const str = process.env.PRIVATE_KEY_PASSPHRASE || '';
const enc = crypto.publicEncrypt(publicKey, Buffer.from(str));
const encStr = enc.toString('base64');

// 복호화
const key = crypto.createPrivateKey({ key: privateKey, format: 'pem', passphrase: 'top secret' });
const dec = crypto.privateDecrypt(key, Buffer.from(encStr, 'base64'));
export const decStr = dec.toString('utf-8');
