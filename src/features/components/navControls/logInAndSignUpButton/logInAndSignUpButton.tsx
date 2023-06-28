import { Link } from 'react-router-dom';
import style from './logInAndSignUpButton.module.css';

export function LogInAndSignUpButton() {
  return (
    <Link to='/'>
      <div className={style.logInAndSignUpButtonContainer}>
          <button className={style.logInAndSignUpButton}>Log in | Sign up</button>
      </div>
    </Link>
  );
}
