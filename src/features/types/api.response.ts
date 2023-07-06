import { DanceCourse } from "../models/danceCourse";
import { User } from "../models/user";

export type ApiAnswer = {
  items: DanceCourse[];
};

export type loginResponse = {
  token: string;
  user: User;
};
