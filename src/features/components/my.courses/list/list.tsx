import { useSelector } from "react-redux";
import { useDanceCourses } from "../../../hooks/use.danceCourses";
import { DanceCourseCard } from "./danceCourse.card/danceCourse.card";
import style from "./list.module.css"
import { RootState } from "../../../../core/store/store";
import { PropagateLoader } from "react-spinners";
import { useEffect } from "react";

export default function List() {

  const { danceCourses, loadDanceCourses } = useDanceCourses();
  const { getDanceCourseState } = useSelector(
    (state: RootState) => state.danceCourses
  )

  useEffect(() => {
    loadDanceCourses();
  }, [loadDanceCourses]);

  return (

    <section className={style.danceCoursesContainer}>
      <div className={style.products}>

        {getDanceCourseState === "loading" && (
          <div className={style.loadingContainer}>

            <PropagateLoader
              color="#d03232"
              size={20}
              speedMultiplier={0.5}
              className={style.loading}
            />

              <span className={style.loadingText}>LOADING<br></br>COURSES...</span>
          </div>
        )}

        {getDanceCourseState === "loaded" && (
          <ul className={style.danceCourseList}>
            {danceCourses.map((item) => (
              <DanceCourseCard key={item.id} item={item}></DanceCourseCard>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
