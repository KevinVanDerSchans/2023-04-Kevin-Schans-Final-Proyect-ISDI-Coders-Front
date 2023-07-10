/* eslint-disable @typescript-eslint/no-unused-vars */
import { DanceCourseRepository } from "../../core/services/danceCourse.repository";
import { store } from "../../core/store/store";
import { ApiAnswer } from "../types/api.response";
import { createDanceCoursesAsync } from "./danceCourse.slice";

describe("Given the danceCourse slice reducer", () => {
  describe("When it is instantiated", () => {

    const danceCourseFormData = {} as unknown as FormData;

    const danceCourseData = { items: [{ courseName: "line salsa" }] } as ApiAnswer;

    const repo = {
      query: jest.fn().mockResolvedValueOnce(danceCourseData),
      create: jest.fn(),
      delete: jest.fn(),
      udpdate: jest.fn(),
    } as unknown as DanceCourseRepository;

    test("Then it should dispatch the createDanceCoursesAsync", () => {
      store.dispatch(createDanceCoursesAsync({ repo, danceCourse: danceCourseFormData }));
      expect(repo.create).toHaveBeenCalled();
    });
  });
});
