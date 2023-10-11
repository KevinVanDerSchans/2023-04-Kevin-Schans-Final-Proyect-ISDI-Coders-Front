import { Header } from "../header/header";
import { NavOptions } from "../../types/nav.options";
import { Footer } from "../footer/footer";
import style from "../contact/contact.module.css"

export default function Contact() {

  const options: NavOptions[] = [
    { url: '/', label: 'HOME' },
    { url: '/myCourses', label: 'MY COURSES' },
    { url: '/gallery', label: 'GALLERY' },
    { url: '/whoAreWe', label: 'WHO ARE WE?'},
    { url: '/contact', label: 'CONTACT' },
  ];

  return(
    <>
      <Header options={options}></Header>

      <section className={style.errorSection}>

        <div className={style.errorContainer}>
          <div className={style.error404ImageContainer}>
            <img className={style.error404Image} src="/assets/404Error.jpg" alt="404 Error Image" />
          </div>
        </div>

      </section>

      <Footer></Footer>
    </>
  );
}
