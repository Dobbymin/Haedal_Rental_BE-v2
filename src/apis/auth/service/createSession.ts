// 유저의 세션 생성
export const createSession = (role: string) => {
  // 세션 변수
  const session = { role };
  return session;
};
