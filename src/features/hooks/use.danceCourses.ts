import { useSelector, useDispatch } from "react-redux";
import { useMemo, useCallback } from "react";
import { RootState, AppDispatch } from "../../core/store/store";
import { DanceCourseRepository } from "../../core/services/danceCourse.repository";
import { loadDanceCoursesAsync } from "../redux/danceCourse.slice";
import { createDanceCoursesAsync } from "../redux/danceCourse.slice";


export function useDanceCourses() {

  const { danceCourses } = useSelector((state: RootState) => state.danceCourses);
  const { token } = useSelector((state: RootState) => state.users)

  const dispatch: AppDispatch = useDispatch();

  const url = "http://localhost:4545/danceCourse";

  const repo: DanceCourseRepository = useMemo(
    () => new DanceCourseRepository(url, token as string), [token]);

  const loadDanceCourses = useCallback(async () => {
    await dispatch(loadDanceCoursesAsync(repo));
  }, [repo, dispatch]);

  const createDanceCourses = async (danceCourse: FormData ) => {
    await dispatch(createDanceCoursesAsync({ repo, danceCourse }));
  };

  return {
    danceCourses,
    loadDanceCourses,
    createDanceCourses,
  };
}
