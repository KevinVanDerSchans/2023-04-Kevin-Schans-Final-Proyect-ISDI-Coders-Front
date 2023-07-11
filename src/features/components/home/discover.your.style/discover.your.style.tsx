import { Link } from "react-router-dom";
import style from "./discover.your.style.module.css";

export function DiscoverYourStyle() {
  return (
    <section className={style.discoverYourStyle}>
      <div className={style.discoverYourStyleContainer}>
        <img className={style.discoverYourStyleImage} src="/assets/discoverYourStyle.jpg" alt="Discover Your Style image section. Woman and man dancing surrounded by lights." />

        <div className={style.discoverYourStyleTextContainer}>
          <h4 className={style.discoverYourStyleTitle}>DISCOVER YOUR STYLE!</h4>

          <ul className={style.discoverYourStyleList}>
            <li className={style.discoverYourStyleItemList} aria-label="Fire icon">🔥 100% FREE</li>
            <li className={style.discoverYourStyleItemList} aria-label="Arrow icon">⏩ Easy and fast</li>
            <li className={style.discoverYourStyleItemList} aria-label="Cross-icon">❌ NO commitment</li>
            <li className={style.discoverYourStyleItemList} aria-label="Infinity icon">♾️ Do it as many times as you want!</li>
          </ul>

          <div className={style.discoverYourStyleButtonContainer}>
            <Link to="/discoverYourStyle" target="_blank">
              <span className={style.discoverYourStyleButton}>LET'S GO!</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
