import { DanceCourseRepository } from "../../core/services/danceCourse.repository";
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

export type GetDanceCoursePayload = {
  repo: DanceCourseRepository,
  url: string,
  level?: string,
}
