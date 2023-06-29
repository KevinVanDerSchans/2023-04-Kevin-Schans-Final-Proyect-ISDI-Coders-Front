import style from "../logInAndSignUpVideo/logInAndSignUpVideo.module.css"

export function LogInAndSignUpVideo() {
  return(
    <section>
      <div className={style.logInAndSignUpVideoContainer}>
          <div className={style.logInAndSignUpVideoWrapper}>
          <video className={style.logInAndSignUpVideo} src="/assets/heroVideo.mp4" role="video" muted autoPlay loop></video>
          </div>
      </div>
    </section>
  );
}
