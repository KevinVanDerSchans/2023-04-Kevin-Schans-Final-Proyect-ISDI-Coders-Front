import { useSelector, useDispatch } from "react-redux";
import { useMemo, useCallback } from "react";
import { RootState, AppDispatch } from "../../core/store/store";
import { DanceCourseRepository } from "../../core/services/danceCourse.repository";
import { loadDanceCoursesAsync } from "../redux/danceCourse.slice";

export function useDanceCourses() {

  const { danceCourses } = useSelector((state: RootState) => state.danceCourses);

  const dispatch: AppDispatch = useDispatch();

  const url = "http://localhost:4545/danceCourse";

  const repo: DanceCourseRepository = useMemo(() => new DanceCourseRepository(url), []);

  const loadDanceCourses = useCallback(async () => {
    await dispatch(loadDanceCoursesAsync(repo));
  }, [repo, dispatch]);

  return {
    danceCourses,
    loadDanceCourses
  };
}
