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

export const updateDanceCourseAsync = createAsyncThunk<
  DanceCourse,
  { repo: DanceCourseRepository; id: DanceCourse["id"]; danceCourse: Partial<DanceCourse>}
  >("danceCourse/update", async ({ repo, id, danceCourse }) => {
  return await repo.update(id, danceCourse);
})

export const deleteDanceCourseAsync = createAsyncThunk<
  string,
  { repo: DanceCourseRepository; id: DanceCourse["id"] }
  >("danceCourse/delete", async ({ id, repo }) => {
  const response = await repo.delete(id);
  return response ? id : "";
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
    }));

    builder.addCase(updateDanceCourseAsync.fulfilled, (state, { payload }) => ({
      ...state,
      danceCourses: state.danceCourses.map((item) =>
      item.id === payload.id ? payload : item
      ),
    }));

    builder.addCase(deleteDanceCourseAsync.fulfilled, (state, { payload }) => {
      return {
        ...state,
        danceCourses: state.danceCourses.filter(
          (danceCourse) => danceCourse.id !== payload
        ),
      };
    });
  }
});

export default danceCoursesSlice.reducer;
export const ac = danceCoursesSlice.actions;
