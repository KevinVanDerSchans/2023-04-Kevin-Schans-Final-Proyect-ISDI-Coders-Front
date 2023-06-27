export type User = {
  id: string,
  role: 'user' | 'admin',
  userName: string,
  email: string,
  password: string,
};
