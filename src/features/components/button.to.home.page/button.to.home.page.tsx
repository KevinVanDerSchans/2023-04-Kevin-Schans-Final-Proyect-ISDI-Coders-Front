import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import style from "../button.to.home.page/button.to.home.page.module.css";

export function ButtonToHomePage() {
  return (
    <div className={style.linkToHomePageContainer}>
      <Link to="/">
        <span className={style.linkToHomePageButton}><FontAwesomeIcon className={style.arrowLeftIcon} aria-label="Arrow icon to navigate to Home page" icon={faArrowLeft} size="2xs" style={{color: "#fafafa",}} /> GO HOME</span>
      </Link>
    </div>
  );
}
