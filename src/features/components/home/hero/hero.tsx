import { Link } from "react-router-dom";
import style from "../hero/hero.module.css"
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faVolumeXmark } from "@fortawesome/free-solid-svg-icons";

export function Hero() {

  const [muted, setMuted] = useState(true);

  const handleMusicControlClick = () => {
    setMuted((prevMuted) => !prevMuted);
  };

  const buttonClasses = [muted ? "" : "controlVolume", style.customButton];


  return (
    <section className={style.hero}>
      <div className={style.heroContainer}>

        <video muted={muted} className={style.heroVideo} src="/assets/hero.webm" autoPlay loop style={{height: '90vh'}}>
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

            <div className={style.controlMusicButtonContainer}>
              <button
                id="musicControl"
                className={buttonClasses.join(' ')}
                onClick={handleMusicControlClick}>
                {muted ? (
              <>
              <FontAwesomeIcon className={style.musicOnIcon}
                aria-label="Icon Music to put the music ON"
                icon={faMusic}
                beat
                style={{ color: "#e5e5e6" }}
              />
              </>
              ) : (
              <>
                <FontAwesomeIcon className={style.musicOffIcon}
                  icon={faVolumeXmark}
                  style={{color: "#efeff1",}} />
              </>
              )}
              </button>
            </div>
          </div>
      </section>
  );
}
