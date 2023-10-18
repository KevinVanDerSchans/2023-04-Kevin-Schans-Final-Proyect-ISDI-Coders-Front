import { Link } from "react-router-dom";
import style from "./top.courses.module.css";

export function TopCourses() {

  return (
    <section className={style.showTopCourses}>
      <div className={style.showTopCoursesContainer}>
        <h2 className={style.topCoursesTitle}>TOP COURSES</h2>
        <div className={style.listOfDances}>

          <article className={style.topCoursesDance}>
            <h3 className={style.titleDance}>LINE SALSA</h3>
            <Link to="myCourses">
              <button className={style.topCoursesButton}>More info</button>
            </Link>
          </article>

          <article className={style.topCoursesDance}>
            <h3 className={style.titleDance}>BACHATA</h3>
            <Link to="/myCourses">
              <button className={style.topCoursesButton}>More info</button>
            </Link>
          </article>

          <article className={style.topCoursesDance}>
            <h3 className={style.titleDance}>HIP HOP</h3>
            <Link to="/myCourses">
              <button className={style.topCoursesButton}>More info</button>
            </Link>
          </article>

        </div>
      </div>
    </section>
  );
}
