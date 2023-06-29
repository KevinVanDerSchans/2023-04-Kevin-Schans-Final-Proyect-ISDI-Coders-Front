import Login from "../login/login"
import Register from "../register/register"
import { LogInAndSignUpVideo } from "./logInAndSignUpVideo/logInAndSignUpVideo";
import { ButtonToHomePage } from "../buttonToHomePage/buttonToHomePage";

export default function LogInAndSignUp() {
  return (
    <div>
      <ButtonToHomePage></ButtonToHomePage>
      <LogInAndSignUpVideo></LogInAndSignUpVideo>
      <Register></Register>
      <Login></Login>
    </div>
  );
}
