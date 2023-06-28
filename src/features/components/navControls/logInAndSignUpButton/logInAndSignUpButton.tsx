import { Link } from "react-router-dom"
import style from "./logInAndSignUpButton.module.css"

export function LogInAndSignUpButton() {
  return (
      <div className={style.logInAndSignUpButtonContainer}>
        <Link to="/">
          <button className={style.logInAndSignUpButton}>Log in | Sign up</button>
        </Link>
      </div>
  )
}
