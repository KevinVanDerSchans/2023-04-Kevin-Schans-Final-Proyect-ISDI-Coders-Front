import { Link } from "react-router-dom";
import { DanceCourse } from "../../../../models/danceCourse";
import style from "./danceCourse.card.module.css"
import { useDanceCourses } from "../../../../hooks/use.danceCourses";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { store } from "../../../../../core/store/store";
import Swal from "sweetalert2";

type Propstype = {
  item: DanceCourse,
}

export function DanceCourseCard({ item }: Propstype) {

  //const location = useLocation();

  const admin = store.getState().users.role;

  const { deleteDanceCourses, danceCourses } = useDanceCourses();

  const handleDelete = (id: string) => {
    const danceCourseFull: DanceCourse = danceCourses.find(
      (item: DanceCourse) => item.id === id) as DanceCourse;

    deleteDanceCourses(danceCourseFull.id)

    Swal.fire({
      position: 'center',
      icon: 'success',
      iconColor: 'red',
      title: 'Course deleted!',
      showConfirmButton: false,
      timer: 1800,
      color: 'white',
        background:
          "linear-gradient(to left, rgb(146, 36, 36), rgba(0, 0, 0))"
    })
  }

  return (
    <article className={style.articleContainer}>

      {
        admin === 'admin' ?
        <div className={style.editButtonContainer}>
           <Link to={"/edit/" + item.id}>
            <button className={style.editButton}>
              <FontAwesomeIcon className={style.editIcon} icon={faPenToSquare} size="2xl" style={{color: "#e9eaec",}} />
            </button>
          </Link>
        </div>
        : ""
      }

      <div className={style.itemContainer}>
        <Link to={"/details/" + item.id}>
          <li key={item.id} className={style.product}>

            <div className={style.danceCourseImageContainer}>
                <img src={item.image.url} alt={item.courseName} style={{width: "16em"}} className={style.danceCourseImage}/>
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
      </div>

      {
        admin === 'admin' ?
        <div className={style.deleteButtonContainer}>
          <button className={style.deleteButton} onClick={() => handleDelete(item.id)} >
            <FontAwesomeIcon className={style.deleteIcon} icon={faTrash} size="2xl" style={{color: "#e9eaec",}} />
          </button>
        </div>
        : ""
      }

    </article>
  );
}
