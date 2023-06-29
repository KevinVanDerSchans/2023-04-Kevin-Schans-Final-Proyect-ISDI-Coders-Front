import style from "../logInAndSignUpVideo/logInAndSignUpVideo.module.css"

export function LogInAndSignUpVideo() {
  return(
    <section>
      <div className={style.logInAndSignUpVideoContainer}>
          <div className={style.logInAndSignUpVideoWrapper}>
          <video role="video" className={style.logInAndSignUpVideo} src="/assets/heroVideo.mp4" muted autoPlay loop></video>
          </div>
      </div>
    </section>
  );
}
