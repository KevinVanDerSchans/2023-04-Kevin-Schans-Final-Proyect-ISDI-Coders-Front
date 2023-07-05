import { Link } from "react-router-dom";
import { DanceCourse } from "../../../../models/danceCourse";
import style from "./danceCourse.card.module.css"

type Propstype = {
  item: DanceCourse,
}

export function DanceCourseCard({ item }: Propstype) {
  return (
    <Link to="/">

      <li key={item.id} className={style.product}>
        <div className={style.danceCourseImageContainer}>
            <img src={item.image.url} alt="" style={{width: "16em"}} className={style.danceCourseImage}/>
        </div>

        <div className={style.danceCourseDescriptionContainer}>


          <div className={style.danceCourseNameAndPriceContainer}>
            <span className={style.danceCourseName}>{item.courseName.toUpperCase()}</span>
            <span className={style.danceCoursePrice}>{item.priceCourse}€</span>
          </div>

          <div className={style.danceCourseInitialDescriptionContainer}>
            <p className={style.danceCourseInitialDescription}>{item.initialDescription}</p>
          </div>

          <div className={style.danceCourseLevelAndButtonContainer}>
            <div className={style.danceCourseLevelContainer}>
              <span className={style.danceCourseLevel}>{item.level}</span>
            </div>

            <div>
              <button className={style.buyNowButton}>BUY NOW</button>
            </div>
          </div>

        </div>
      </li>
    </Link>
  );
}
