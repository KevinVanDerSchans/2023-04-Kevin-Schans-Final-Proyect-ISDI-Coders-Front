import { DanceCourse } from "../models/danceCourse";
import { User } from "../models/user";

export type ApiAnswer = {
  items: DanceCourse[];
  page: number;
  count: number;
};

export type loginResponse = {
  token: string;
  user: User;
};
