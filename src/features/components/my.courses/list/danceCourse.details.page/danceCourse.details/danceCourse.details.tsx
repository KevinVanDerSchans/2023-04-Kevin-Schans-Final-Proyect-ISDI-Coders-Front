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

        <div className={style.danceCourseDetailsMediaContainer}>

          <div className={style.buttonToMyCoursesPageContainer}>
            <ButtonToMyCoursesPage></ButtonToMyCoursesPage>
          </div>

          <div className={style.danceCourseDetailsImageContainer}>
            <img src={item.image.url} alt={item.courseName} className={style.danceCourseDetailsImage} style={{height: "38.5em"}}/>
          </div>
        </div>

        <div className={style.danceCourseDetailsInformationContainer}>

          <div className={style.danceCourseDetailsDanceCourseNameContainer}>
            <h1 className={style.danceCourseDetailsDanceCourseName}>{item.courseName.toUpperCase()}</h1>
          </div>

          <div className={style.danceCourseDetailsLevelAndButtonContainer}>
            <span className={style.danceCourseLevel}> {item.level.toUpperCase()}</span>
          </div>

          <div className={style.danceCourseDetailsCoursePriceContainer}>
            <span className={style.danceCourseDetailsCoursePrice}>{item.priceCourse}€</span>

            <button className={style.addToCartButton}>ADD TO CART</button>
          </div>

          <div className={style.danceCourseDetailsTotalClassesContainer}>
            <span className={style.danceCourseDetailsTotalClasses}>Total: {item.totalClasses} classes</span>
          </div>

          <div className={style.danceCourseDetailsLargeDescriptionContainer}>
            <p className={style.danceCourseDetailsLargeDescription}>{item.largeDescription}</p>
          </div>

        </div>

      </div>
    </section>
    </>
  )
}
