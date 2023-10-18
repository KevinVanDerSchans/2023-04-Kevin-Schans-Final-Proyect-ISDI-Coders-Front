import { SyntheticEvent } from "react";
import { useDanceCourses } from "../../hooks/use.danceCourses";
import { useParams } from "react-router-dom";
import { DanceCourse } from "../../models/danceCourse";
import style from "./edit.form.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faVideo } from "@fortawesome/free-solid-svg-icons";
import { Header } from "../header/header";
import { NavOptions } from "../../types/nav.options";
import Swal from "sweetalert2";

export default function ModifyForm() {

  const options: NavOptions[] = [
    { url: '/', label: 'HOME' },
    { url: '/myCourses', label: 'MY COURSES' },
    { url: '/contact', label: 'GALLERY' },
    { url: '/contact', label: 'CONTACT' },
  ];

  const { id } = useParams() as { id: string };
  const { updateDanceCourses, danceCourses } = useDanceCourses();

  const danceCourseFull: DanceCourse = danceCourses?.find(
    (item: DanceCourse) => item.id === id
  ) as DanceCourse;

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();

    const editDanceCourseForm = event.target as HTMLFormElement;

    const courseNameValue = (
      editDanceCourseForm.elements.namedItem("courseName") as HTMLInputElement
    ).value;

    const levelValue = (
      editDanceCourseForm.elements.namedItem("level") as HTMLInputElement
    ).value;

    const priceCourseValue = (
      editDanceCourseForm.elements.namedItem("priceCourse") as HTMLInputElement
    ).value;

    const totalClassesValue = (
      editDanceCourseForm.elements.namedItem("totalClasses") as HTMLInputElement
    ).value;

    const initialDescriptionValue = (
      editDanceCourseForm.elements.namedItem("initialDescription") as HTMLInputElement
    ).value;

    const largeDescriptionValue = (
      editDanceCourseForm.elements.namedItem("largeDescription") as HTMLInputElement
    ).value;

    const danceCourseData: Partial<DanceCourse> = {
      id: danceCourseFull.id,
      courseName: courseNameValue,
      level: levelValue,
      priceCourse: priceCourseValue,
      totalClasses: totalClassesValue,
      initialDescription: initialDescriptionValue,
      largeDescription: largeDescriptionValue,
    }

    await updateDanceCourses(id, danceCourseData );

    Swal.fire({
      position: 'center',
      icon: 'success',
      iconColor: 'red',
      title: 'Course edited!',
      showConfirmButton: false,
      timer: 1800,
      color: 'white',
        background:
          "linear-gradient(to left, rgb(146, 36, 36), rgba(0, 0, 0))"
    })
  }

  return (
    <>
      <Header options={options}></Header>

      <section className={style.editFormContainer}>
        <div className={style.formContainer}>

          <div className={style.formImageContainer}>

            <div className={style.formTitleContainer}>
              <h1 className={style.formTitle}>Edit your course</h1>
            </div>

            <form className={style.editForm} onSubmit={handleSubmit} aria-label="form">

              <div className={style.firstInputsContainer}>
                <div className={style.inputContainer}>
                  <input className={style.input} type="text" id="courseName" name="courseName" defaultValue={danceCourseFull.courseName} placeholder="Course name" autoComplete="off" maxLength={12}/>
                </div>

                <div className={style.inputContainer}>
                  <input className={style.input} type="text" id="level" name="level" defaultValue={danceCourseFull.level}  placeholder="Level" autoComplete="off" minLength={8} maxLength={12}/>
                </div>

                <div className={style.inputContainer}>
                  <input className={style.input} type="text" id="priceCourse" defaultValue={danceCourseFull.priceCourse} name="priceCourse" placeholder="Price" autoComplete="off" maxLength={5}/>
                </div>

                <div className={style.inputContainer}>
                  <input className={style.input} type="text" id="totalClasses" name="totalClasses" defaultValue={danceCourseFull.totalClasses} placeholder="Total classes" autoComplete="off" minLength={1} maxLength={3}/>
                </div>

                <div className={style.inputContainer}>
                  <textarea className={style.textarea} name="initialDescription" defaultValue={danceCourseFull.initialDescription} id="initialDescription" cols={30} rows={10} placeholder="Initial description" maxLength={500} minLength={10}></textarea>
                </div>
              </div>

              <div className={style.secondInputsContainer}>
                <div className={style.inputContainer}>
                  <textarea className={style.textarea} name="largeDescription" id="largeDescription" defaultValue={danceCourseFull.largeDescription} cols={30} rows={10} placeholder="Large description" maxLength={500} minLength={20}></textarea>
                </div>
              </div>

              <div className={style.thirdInputsContainer}>
                <div className={style.firstIcon}>
                  <label className={style.imageLabel} htmlFor="image">
                    <FontAwesomeIcon className={style.imageIcon} icon={faImage} size="2xl" style={{color: "#e6e7eb",}} />
                  </label>

                  <input disabled className={style.typeFileImage} type="file" id="image" name="image" accept="image/*"/>
                </div>

                <div className={style.secondtIcon}>
                  <label className={style.videoLabel} htmlFor="video">
                    <FontAwesomeIcon className={style.videoIcon} icon={faVideo} size="2xl" style={{color: "#e2e5e9",}} />
                  </label>

                  <input disabled className={style.typeFileVideo} type="file" id="video" name="video" accept="video/*"/>
                </div>
              </div>

              <div className={style.fourthInputsContainer}>
                <button type="submit" className={style.editButton}>Update</button>
              </div>

            </form>
          </div>
        </div>
      </section>
    </>
  )
}
