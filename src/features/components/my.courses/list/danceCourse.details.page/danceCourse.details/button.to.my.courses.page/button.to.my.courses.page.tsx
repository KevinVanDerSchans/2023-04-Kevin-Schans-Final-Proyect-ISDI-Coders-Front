import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import style from "./button.to.my.courses.page.module.css";

export function ButtonToMyCoursesPage() {
  return (
    <div className={style.linkToMyCoursesPageContainer}>
      <Link to="/myCourses">
        <span className={style.linkToMyCoursesPageButton}><FontAwesomeIcon className={style.arrowLeftIcon} aria-label="Arrow icon to navigate to Home page" icon={faArrowLeft} style={{color: "#fafafa",}} /> GO BACK</span>
      </Link>
    </div>
  );
}
