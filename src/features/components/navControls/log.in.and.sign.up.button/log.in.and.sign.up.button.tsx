import { Link } from 'react-router-dom';
import style from "../log.in.and.sign.up.button/log.in.and.sign.up.button.module.css"

export function LogInAndSignUpButton() {
  return (
    <Link to='/logInAndSignUp'>
      <div className={style.logInAndSignUpButtonContainer}>
        <span className={style.logInAndSignUpButton}>Log in | Sign up</span>
      </div>
    </Link>
  );
}
