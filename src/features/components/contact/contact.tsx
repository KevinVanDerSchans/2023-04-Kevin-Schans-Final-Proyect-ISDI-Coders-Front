import { Header } from "../header/header";
import { NavOptions } from "../../types/nav.options";
import style from "../contact/contact.module.css";
import { Footer } from "../footer/footer";

export default function Contact() {

  event?.preventDefault();

  const options: NavOptions[] = [
    { url: '/', label: 'HOME' },
    { url: '/myCourses', label: 'MY COURSES' },
    { url: '/gallery', label: 'GALLERY' },
    { url: '/contact', label: 'CONTACT' },
  ];

  return(
    <>
      <Header options={options}></Header>

      <section className={style.contactFormContainer}>
        <div className={style.formContainer}>

          <div className={style.formImageContainer}>

            <div className={style.formTitleContainer}>
              <h1 className={style.formTitle}>Contact us</h1>
            </div>

            <form
              action="https://formspree.io/f/xaygagdj"
              method="POST"
              className={style.contactForm}
              aria-label="form">

              <div className={style.firstInputsContainer}>
                <div className={style.inputContainer}>
                  <input className={style.input} type="text" id="fullName" name="fullName" placeholder="Full name*" autoComplete="off" required/>
                </div>

                <div className={style.inputContainer}>
                  <input className={style.input} type="text" id="phone" name="phone" placeholder="Phone" autoComplete="off" minLength={9} maxLength={9} required/>
                </div>

                <div className={style.inputContainer}>
                  <input className={style.input} type="email" id="email" name="email" placeholder="E-mail*" autoComplete="off" required/>
                </div>

                <div className={style.inputContainer}>
                  <input className={style.input} type="text" id="yourLevel" name="yourLevel" placeholder="Your level*" autoComplete="off" required/>
                </div>

                <div className={style.inputContainer}>
                  <textarea className={style.textarea} name="message" id="message" cols={30} rows={10} placeholder="How can we help you?*" maxLength={500} minLength={10} required></textarea>
                </div>
              </div>

              <div className={style.fourthInputsContainer}>
                <button type="submit" className={style.contactButton}>Send</button>
              </div>

            </form>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </>
  );
}
