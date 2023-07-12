import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "../log.in.and.sign.up.video/log.in.and.sign.up.video.module.css"
import { faMusic, faVolumeXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export function LogInAndSignUpVideo() {

  const [muted, setMuted] = useState(true);

  const handleMusicControlClick = () => {
    setMuted((prevMuted) => !prevMuted);
  };

  const buttonClasses = [muted ? "" : "controlVolume", style.customButton];

  return(
    <section>

      <div className={style.logInAndSignUpVideoContainer}>
          <div className={style.logInAndSignUpVideoWrapper}>
            <video muted={muted} className={style.logInAndSignUpVideo} src="/assets/logInAndSignUp.webm" role="video" autoPlay loop></video>
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
    </section>
  );
}
