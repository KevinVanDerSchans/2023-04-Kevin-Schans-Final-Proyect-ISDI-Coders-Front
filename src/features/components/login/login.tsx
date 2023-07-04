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
      userName: inputs[0].value,
      password: inputs[1].value,

    } as Partial<User>;

    if (loggedUser.userName === "" || loggedUser.password === "") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please, make sure you have filled in all the fields!',
        showConfirmButton: true,
        color: 'black',
        background: 'white',
      });

    } else {
      handleLoginUser(loggedUser);
      element.reset();
      navigate('/');

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: `Welcome ${loggedUser.userName} !`,
        showConfirmButton: false,
        color: 'black',
        background: 'white',
        timer: 2000,
      });
    }
  };

  return (
    <div className={style.logInContainer}>
      <h2 className={style.logInTitle}>Log in</h2>

      <form onSubmit={handleSubmit} className={style.logInFormContainer}>

        <div className={style.formInputContainer}>
          <label htmlFor="user"></label>
          <input className={style.formInput} type="text" id="user" name="userName" placeholder="Username" />
        </div>

        <div className={style.formInputContainer}>
          <label htmlFor="password"></label>
          <input className={style.formInput} type="password" id="password" name="password" placeholder="Password" />
        </div>

        <div className={style.logInButtonFormInputContainer}>
          <button className={style.logInButton} type="submit" role="button" aria-selected="true">Log in</button>
        </div>

      </form>
    </div>
  );
}
