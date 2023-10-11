import style from './footer.module.css';
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

export function Footer() {
  return (
    <footer className={style.footer}>


      <div className={style.textFooterContainer}>
        <span className={style.dancersNames}>Alex & Melanie © 2023</span>
      </div>

      <div className={style.socialMediaFooterContainer}>

        <a href="https://www.instagram.com/melaniearesss/" target="_blank" >
          <AiFillInstagram className={style.instagramLogo} />
        </a>

        <a href="https://www.facebook.com/alexander.vanderschans.3" target="_blank">
          <AiFillFacebook className={style.facebookLogo} />
        </a>

        <a href="https://www.linkedin.com/in/alexander-dennis-van-der-schans-b63131258/" target="_blank">
          <AiFillLinkedin className={style.linkedinLogo} />
        </a>

      </div>
    </footer>
  );
}
