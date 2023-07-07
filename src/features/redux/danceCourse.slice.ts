import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DanceCourse } from "../models/danceCourse";
import { DanceCourseRepository } from "../../core/services/danceCourse.repository";

export type DanceCourseState = {
  danceCourses: DanceCourse[],
};

const initialState: DanceCourseState = {
  danceCourses: [] as DanceCourse[],
};

export const loadDanceCoursesAsync = createAsyncThunk(
  "danceCourses/load",
  async (repo: DanceCourseRepository) => {
    const response = await repo.query();
    return response;
  }
);

const danceCoursesSlice = createSlice({
  name: "danceCourses",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(loadDanceCoursesAsync.fulfilled, (state, { payload }) => ({
      ...state,
      danceCourses: payload,

    }));
  }
});

export default danceCoursesSlice.reducer;
