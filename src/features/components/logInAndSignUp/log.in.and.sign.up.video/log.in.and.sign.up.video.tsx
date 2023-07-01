import style from "../log.in.and.sign.up.video/log.in.and.sign.up.video.module.css"

export function LogInAndSignUpVideo() {
  return(
    <section>
      <div className={style.logInAndSignUpVideoContainer}>
          <div className={style.logInAndSignUpVideoWrapper}>
          <video className={style.logInAndSignUpVideo} src="/assets/bachataFusion.mp4" role="video" muted autoPlay loop></video>
          </div>
      </div>
    </section>
  );
}
