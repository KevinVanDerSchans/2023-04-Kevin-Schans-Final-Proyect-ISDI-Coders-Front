import { useDanceCourses } from "../../../hooks/use.danceCourses";
import { DanceCourseCard } from "./danceCourse.card/danceCourse.card";
import style from "./list.module.css"
import { useEffect } from "react";

export function List() {

  const { danceCourses, loadDanceCourses } = useDanceCourses();

  useEffect(() => {
    loadDanceCourses();
  }, [loadDanceCourses]);

  return (
    <section className={style.danceCoursesContainer}>
      <div className={style.products}>

        <ul className={style.danceCourseList}>
          {danceCourses.map((item) => (
            <DanceCourseCard key={item.id} item={item}></DanceCourseCard>
          ))}
        </ul>

      </div>
    </section>
  )
}
