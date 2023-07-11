import { SyntheticEvent } from "react";
import { useDanceCourses } from "../../../hooks/use.danceCourses";
import style from "./danceCourse.create.form.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faVideo } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

export function DanceCourseCreateForm() {

  const { createDanceCourses } = useDanceCourses();

  const handleSubmit = (event: SyntheticEvent ) => {
    event.preventDefault();

    const danceCourseForm = event.target as HTMLFormElement;
    const danceCourseData = new FormData(danceCourseForm);

    createDanceCourses(danceCourseData);

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: `Course successfully created!`,
      text: 'Would you like to create a new one?',
      showConfirmButton: true,
      color: 'white',
      background:
        "linear-gradient(to left, rgb(146, 36, 36), rgba(0, 0, 0))",
      imageAlt: 'Feedback about creating a course correctly.',
    });
  };

  return (
    <>
      <section className={style.createFormContainer}>
        <div className={style.formContainer}>

          <div className={style.formImageContainer}>

            <div className={style.formTitleContainer}>
              <h1 className={style.formTitle}>Create a new course</h1>
            </div>

            <form className={style.createForm} onSubmit={handleSubmit} aria-label="form">

              <div className={style.firstInputsContainer}>
                <div className={style.inputContainer}>
                  <input className={style.input} type="text" id="courseName" name="courseName" placeholder="Course name" autoComplete="off" maxLength={12}/>
                </div>

                <div className={style.inputContainer}>
                  <input className={style.input} type="text" id="level" name="level" placeholder="Level" autoComplete="off" minLength={8} maxLength={12}/>
                </div>

                <div className={style.inputContainer}>
                  <input className={style.input} type="text" id="priceCourse" name="priceCourse" placeholder="Price" autoComplete="off" maxLength={5}/>
                </div>

                <div className={style.inputContainer}>
                  <input className={style.input} type="text" id="totalClasses" name="totalClasses" placeholder="Total classes" autoComplete="off" minLength={1} maxLength={3}/>
                </div>

                <div className={style.inputContainer}>
                  <textarea className={style.textarea} name="initialDescription" id="initialDescription" cols={30} rows={10} placeholder="Initial description" maxLength={500} minLength={10}></textarea>
                </div>
              </div>

              <div className={style.secondInputsContainer}>
                <div className={style.inputContainer}>
                  <textarea className={style.textarea} name="largeDescription" id="largeDescription" cols={30} rows={10} placeholder="Large description" maxLength={500} minLength={20}></textarea>
                </div>
              </div>

              <div className={style.thirdInputsContainer}>
                <div className={style.firstIcon}>
                  <label className={style.imageLabel} htmlFor="image">
                    <FontAwesomeIcon className={style.imageIcon} icon={faImage} size="2xl" style={{color: "#e6e7eb",}} />
                  </label>

                  <input className={style.typeFileImage} type="file" id="image" name="image" accept="image/*"/>
                </div>

                <div className={style.secondtIcon}>
                  <label className={style.videoLabel} htmlFor="video">
                    <FontAwesomeIcon className={style.videoIcon} icon={faVideo} size="2xl" style={{color: "#e2e5e9",}} />
                  </label>

                  <input className={style.typeFileVideo} type="file" id="video" name="video" accept="video/*"/>
                </div>
              </div>

              <div >
              </div>

              <div className={style.fourthInputsContainer}>
                <button type="submit" className={style.createButton}>Create</button>
              </div>

            </form>
          </div>
        </div>
      </section>
    </>
  )
}
