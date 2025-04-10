import { Request, RequestHandler, Response } from 'express';

// import bcrypt from 'bcrypt';

import { searchUser, users } from '../../../mock';

// API 요청을 처리하는 함수
export const handleUserCreate: RequestHandler = async (req: Request, res: Response) => {
  const { id, password, name, phoneNumber } = req.body;

  // user의 request를 통해 받은 id를 이용해 기존 유저 검색
  const user = searchUser(id);

  // 만약 id가 이미 존재하면 409 에러 반환
  if (user) {
    res.status(409).send('이미 등록된 사용자 입니다.');
  }

  // 임시 password 해싱
  // const hashedPassword = await bcrypt.hash(password, 10);

  // 새로운 사용자 추가
  users.push({
    userId: users.length + 1,
    // TODO: 임시로 user로 설정
    role: 'user',
    id,
    // password: hashedPassword,
    password,
    name,
    phoneNumber,
  });

  // 응답으로 200 코드와 함께 회원가입 처리를 완료 시킴
  res.status(200).send('회원가입 처리가 완료되었습니다.');
};
