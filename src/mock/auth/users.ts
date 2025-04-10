type User = {
  role: string;
  userId: number;
  id: string;
  password: string;
  name: string;
  phoneNumber: string;
};

// user 데이터 생성
export const users = [
  {
    userId: 12,
    role: 'admin',
    id: 'test',
    password: 'test',
    name: '테스트',
    phoneNumber: '010-1234-5678',
  },
];

export const searchUser = (id: string) => {
  return users.find((user) => user.id === id) as User;
};
