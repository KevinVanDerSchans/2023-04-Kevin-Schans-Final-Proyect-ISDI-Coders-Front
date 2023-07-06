import { useParams } from "react-router-dom";
import { useDanceCourses } from "../../../../../hooks/use.danceCourses";
import { DanceCourse } from "../../../../../models/danceCourse";
import style from "./danceCourse.details.module.css";
import { ButtonToMyCoursesPage } from "./button.to.my.courses.page/button.to.my.courses.page";

export function DanceCourseDetails() {

  const { id } = useParams();
  const { danceCourses } = useDanceCourses();

  const item: DanceCourse = danceCourses.find((item) => item.id === id) as DanceCourse;

  return (
    <>
    <section className={style.danceCourseDetailsSection}>
      <div className={style.danceCourseDetailsContainer}>

      <div className={style.buttonToMyCoursesPageContainer}>
        <ButtonToMyCoursesPage></ButtonToMyCoursesPage>
      </div>







      </div>
    </section>

      <span>{item.courseName}</span>
      <img src={item.image.url} />
    </>
  )
}
