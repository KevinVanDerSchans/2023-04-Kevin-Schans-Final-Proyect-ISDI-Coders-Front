import Login from "../login/login"
import Register from "../register/register"
import style from "../logInAndSignUp/logInAndSignUp.module.css"
import { LogInAndSignUpVideo } from "./logInAndSignUpVideo/logInAndSignUpVideo";

export default function LogInAndSignUp() {
  return (
    <div className={style.body}>
      <LogInAndSignUpVideo></LogInAndSignUpVideo>
      <Register></Register>
      <Login></Login>
    </div>
  );
}
