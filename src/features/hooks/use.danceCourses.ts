import { useSelector, useDispatch } from "react-redux";
import { useMemo, useCallback } from "react";
import { RootState, AppDispatch } from "../../core/store/store";
import { DanceCourseRepository } from "../../core/services/danceCourse.repository";
import { loadDanceCoursesAsync, createDanceCoursesAsync, deleteDanceCourseAsync, updateDanceCourseAsync } from "../redux/danceCourse.slice";
import { DanceCourse } from "../models/danceCourse";
import { url } from "../../config";

export function useDanceCourses() {

  const { danceCourses } = useSelector((state: RootState) => state.danceCourses);
  const { token } = useSelector((state: RootState) => state.users)

  const dispatch: AppDispatch = useDispatch();

  const repo: DanceCourseRepository = useMemo(
    () => new DanceCourseRepository(url, token as string), [token]
  );
  console.log(url)

  const loadDanceCourses = useCallback(async () => {
    await dispatch(loadDanceCoursesAsync(repo));
  }, [repo, dispatch]);

  const createDanceCourses = async (danceCourse: FormData ) => {
    await dispatch(createDanceCoursesAsync({ repo, danceCourse }));
  };

  const updateDanceCourses = async (id: DanceCourse["id"], danceCourse: Partial<DanceCourse>) => {
    await dispatch(updateDanceCourseAsync({ repo, id, danceCourse }))
  }

  const deleteDanceCourses = async (id: DanceCourse["id"]) => {
    await dispatch(deleteDanceCourseAsync({ repo, id}));
  }

  return {
    danceCourses,
    loadDanceCourses,
    createDanceCourses,
    updateDanceCourses,
    deleteDanceCourses,
  };
}
