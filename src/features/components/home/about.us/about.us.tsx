import { Link } from "react-router-dom";
import style from "./about.us.module.css"

export function AboutUs() {
  return (
    <section className={style.aboutUs}>
      <div className={style.aboutUsContainer}>
        <img className={style.aboutUsImage} src="/assets/aboutUs.jpg" alt="Alex & Melanie. Contact them pressing the button." style={{ width: "100%", height: "100%"}}/>

        <div className={style.aboutUsButtonContainer}>
          <Link to="/contact">
            <span className={style.aboutUsButton}>Contact us!</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
