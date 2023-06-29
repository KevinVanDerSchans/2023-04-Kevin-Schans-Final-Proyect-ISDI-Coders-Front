import { Link } from "react-router-dom";
import style from "../buttonToHomePage/buttonToHomePage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export function ButtonToHomePage() {
  return (
    <div className={style.linkToHomePageContainer}>
      <Link to="/">
        <span className={style.linkToHomePageButton}><FontAwesomeIcon className={style.arrowLeftIcon} aria-label="Arrow icon to navigate to Home page" icon={faArrowLeft} size="2xs" style={{color: "#fafafa",}} /> GO HOME</span>
      </Link>
    </div>
  );
}
