import { Link } from "react-router-dom";
import style from "./learn.online.module.css"

export function LearnOnline() {
  return (
    <section className={style.learnOnline}>
      <div className={style.learnOnlineContainer}>
        <div className={style.learnOnlineImageContainer}>
          <img className={style.learnOnlineImage} src="/assets/studyOnline.jpeg" alt="Student learning online" style={{width:"100%", height:"30em"}} />
        </div>

        <div className={style.learnOnlineText}>
          <h2 className={style.learnOnlineTitle}>Learn <span className={style.online}>ONLINE!</span></h2>
          <p className={style.learnOnlineDescription}><strong>At your own pace</strong>, with all the <strong>steps explained </strong>and <strong>organized by levels of difficulty</strong>. There're all styles: <Link to="/myCourses" className={style.learnOnlineDances}>salsa</Link>, <Link to="/myCourses" className={style.learnOnlineDances}>bachata</Link>, <Link to="/myCourses" className={style.learnOnlineDances}>hip hop</Link>, <Link to="/myCourses" className={style.learnOnlineDances}>tango</Link>... <strong>and much <Link to="/myCourses" className={style.learnOnlineDances}>more</Link></strong>!</p>
        </div>
      </div>
    </section>
  );
}
