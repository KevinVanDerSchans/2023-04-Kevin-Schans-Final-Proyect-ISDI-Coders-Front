import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DanceCourse } from "../models/danceCourse";
import { DanceCourseRepository } from "../../core/services/danceCourse.repository";

export type DanceCourseState = {
  danceCourses: DanceCourse[],
  count: number,
  page: number,
  items: DanceCourse[]
};

const initialState: DanceCourseState = {
  danceCourses: [] as DanceCourse[],
  count: 0,
  page: 1,
  items: [] as DanceCourse[],
};

export const loadDanceCoursesAsync = createAsyncThunk(
  "danceCourses/load",
  async (repo: DanceCourseRepository) => {
    const response = await repo.query();
    return response;
  }
);

export const createDanceCoursesAsync = createAsyncThunk<
  DanceCourse,
  { repo: DanceCourseRepository; danceCourse: FormData }
  >("danceCourses/create", async ({ repo, danceCourse }) => {
  return await repo.create(danceCourse);
});

const danceCoursesSlice = createSlice({
  name: "danceCourses",
  initialState,
  reducers: {
    nextPage: (state) => ({
      ...state,
      page: state.page + 1,
    }),
    previousPage: (state) => ({
      ...state,
      page: state.page - 1,
    }),
  },

  extraReducers: (builder) => {
    builder.addCase(loadDanceCoursesAsync.fulfilled, (state, { payload }) => ({
      ...state,
      danceCourses: payload,
    }));

    builder.addCase(createDanceCoursesAsync.fulfilled, (state, { payload }) => ({
      ...state,
      danceCourses: [...state.items, payload]

    }))
  }
});

export default danceCoursesSlice.reducer;
export const ac = danceCoursesSlice.actions;
