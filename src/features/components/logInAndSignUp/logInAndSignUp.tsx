import Login from "../login/login"
import Register from "../register/register"
import { LogInAndSignUpVideo } from "./logInAndSignUpVideo/logInAndSignUpVideo";
import { ButtonToHomePage } from "../buttonToHomePage/buttonToHomePage";
import style from "../logInAndSignUp/logInAndSignUp.module.css"


export default function LogInAndSignUp() {
  return (

    <>
      <div>
        <ButtonToHomePage></ButtonToHomePage>
        <LogInAndSignUpVideo></LogInAndSignUpVideo>
      </div>

      <div className={style.logInAndSignUpContainer}>
        <div className={style.logInAndSignUpContainer}>
          <Register></Register>
          <Login></Login>
        </div>
      </div>
    </>
  );
}
