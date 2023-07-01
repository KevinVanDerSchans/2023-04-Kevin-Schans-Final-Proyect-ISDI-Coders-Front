import { useNavigate } from "react-router-dom";
import { useUsers } from "../../hooks/use.users";
import { SyntheticEvent } from "react";
import { User } from "../../models/user";
import 'animate.css';
import Swal from "sweetalert2";
import style from "../login/login.module.css"

export default function Login() {

  const { handleLoginUser } = useUsers();
  const navigate = useNavigate();

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    const element = event.target as HTMLFormElement;
    const inputs = element.querySelectorAll("input");

    const loggedUser = {

      user: inputs[0].value,
      password: inputs[1].value,
    } as Partial<User>;

    handleLoginUser(loggedUser)
    element.reset();

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Welcome!',
      showConfirmButton: false,
      timer: 2000
    });

    navigate('/');
  };

  return (
    <div className={style.logInContainer}>
      <h2 className={style.logInTitle}>Log in</h2>

      <form onSubmit={handleSubmit} className={style.logInFormContainer}>

        <div className={style.formInputContainer}>
          <label htmlFor="user"></label>
          <input className={style.formInput} type="text" id="user" name="userName" placeholder="Username"/>
        </div>

        <div className={style.formInputContainer}>
          <label htmlFor="password"></label>
          <input className={style.formInput} type="password" id="password" name="password" placeholder="Password"/>
        </div>

        <div className={style.formInputContainer}>
          <button className={style.logInButton} type="submit">Log in</button>
        </div>

      </form>
    </div>
  );
}
