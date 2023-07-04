import { useDanceCourses } from "../../../hooks/use.danceCourses";
import style from "./list.module.css"
import { useEffect } from "react";

export function List() {

  const { danceCourses, loadDanceCourses } = useDanceCourses();

  useEffect(() => {
    loadDanceCourses();
  }, [loadDanceCourses]);

  return (
    <section className={style.body}>
      <ul>
        {danceCourses.map((item) => (
          <li>
            <span>${item.courseName}</span>
            <span>${item.largeDescription}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
