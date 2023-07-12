import { useParams } from "react-router-dom";
import { useDanceCourses } from "../../../../../hooks/use.danceCourses";
import { DanceCourse } from "../../../../../models/danceCourse";
import style from "./danceCourse.details.module.css";
import { ButtonToMyCoursesPage } from "./button.to.my.courses.page/button.to.my.courses.page";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faVolumeXmark } from "@fortawesome/free-solid-svg-icons";
export function DanceCourseDetails() {

  const [muted, setMuted] = useState(true);

  const handleMusicControlClick = () => {
    setMuted((prevMuted) => !prevMuted);
  };

  const buttonClasses = [muted ? "" : "controlVolume", style.customButton];

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

          <div className={style.danceCourseDetailsVideoContainer}>

            <video muted={muted} src={item.video.url} autoPlay loop className={style.danceCourseDetailsVideo}></video>

          </div>
        </div>

        <div className={style.controlMusicButtonContainer}>
            <button
              aria-label="Enable/disable video music"
              id="musicControl"
              className={buttonClasses.join(' ')}
              onClick={handleMusicControlClick}>
              {muted ? (
            <>
            <FontAwesomeIcon className={style.musicOnIcon}
              aria-label="Icon Music to put the music ON"
              icon={faMusic}
              beat
              style={{ color: "#e5e5e6" }}
            />
            </>
            ) : (
            <>
              <FontAwesomeIcon className={style.musicOffIcon}
                icon={faVolumeXmark}
                style={{color: "#efeff1",}} />
            </>
            )}
            </button>
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
