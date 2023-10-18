import style from "./discover.your.style.module.css";

export function DiscoverYourStyle() {
  return (
    <section className={style.discoverYourStyle}>
      <div className={style.discoverYourStyleContainer}>
        <img className={style.discoverYourStyleImage} src="/assets/discoverYourStyle.jpg" alt="Discover Your Style image section. Woman and man dancing surrounded by lights." />

        <div className={style.discoverYourStyleTextContainer}>
          <h4 className={style.discoverYourStyleTitle}>BENEFITS OF DANCING</h4>

          <ul className={style.discoverYourStyleList}>
            <li className={style.discoverYourStyleItemList} aria-label="Fire icon">🔥 Physical conditioning</li>
            <li className={style.discoverYourStyleItemList} aria-label="Cross-icon">🧠 Mental stimulation</li>
            <li className={style.discoverYourStyleItemList} aria-label="Infinity icon">🍻 Helps to meet and socialize!</li>
            <li className={style.discoverYourStyleItemList} aria-label="Arrow icon">🤸‍♀️ Improves balance and coordination</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
