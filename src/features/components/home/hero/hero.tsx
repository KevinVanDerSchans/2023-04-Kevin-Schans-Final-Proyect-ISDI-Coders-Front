import { Link } from "react-router-dom";
import style from "../hero/hero.module.css"

export function Hero() {

  return (
    <section className={style.hero}>
      <div className={style.heroContainer}>

        <video className={style.heroVideo} src="/assets/heroVideo.mp4" muted autoPlay loop style={{height: '90vh'}}>
          <track kind="captions" src="captions.vtt" srcLang="en" label="Hero video dancing"></track>
        </video>


        <div className={style.heroText}>

          <div>
            <h1>Shall we dance?</h1>
          </div>

          <div>
            <Link to="/myCourses">
              <span className={style.heroLink}>JOIN NOW</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
