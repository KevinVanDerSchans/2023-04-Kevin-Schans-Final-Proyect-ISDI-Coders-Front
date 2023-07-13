import { DanceCourseRepository } from "../../core/services/danceCourse.repository";
import { store } from "../../core/store/store";
import { DanceCourse } from "../models/danceCourse";
import { ApiAnswer } from "../types/api.response";
import {
  createDanceCoursesAsync,
  deleteDanceCourseAsync,
} from "./danceCourse.slice";

describe("Given the DanceCourse slice reducer", () => {
  describe("When it is instantiated", () => {

    const mockDanceCourse = {
      id: "1",
      courseName: "line salsa",
    } as unknown as FormData;

    const mockUpdatedDanceCourse = {
      id: "1",
      courseName: "fusion",
    } as unknown as FormData;

    const mockId = "1" as DanceCourse["id"];

    const mockApiAnswer = {
      items: [{ id: "1", courseName: "dominicana"}],
      next: null,
      previous: null,
      count: 0,
    } as unknown as ApiAnswer;

    const mockRepo: DanceCourseRepository = {
      query: jest.fn().mockResolvedValue(mockApiAnswer),
      create: jest.fn().mockResolvedValue(mockDanceCourse),
      update: jest.fn().mockResolvedValue(mockUpdatedDanceCourse),
      delete: jest.fn().mockResolvedValue(true),
    } as unknown as DanceCourseRepository;


    test("Then it should dispatch the createDanceCoursesAsync", () => {
      store.dispatch(createDanceCoursesAsync({ repo: mockRepo, danceCourse: mockDanceCourse }));
      expect(mockRepo.create).toHaveBeenCalled();
    });

    test("Then it should dispatch the deleteDanceCourseAsync", () => {
      store.dispatch(deleteDanceCourseAsync({ repo: mockRepo, id: mockId }));
      expect(mockRepo.delete).toHaveBeenCalled();
    });
  });
});
