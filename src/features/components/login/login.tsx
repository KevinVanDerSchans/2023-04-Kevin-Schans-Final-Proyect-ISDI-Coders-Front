import { useNavigate } from "react-router-dom";
import { useUsers } from "../../hooks/use.users";
import { SyntheticEvent, useEffect } from "react";
import { User } from "../../models/user";
import 'animate.css';
import Swal from "sweetalert2";
import style from "../login/login.module.css"

export default function Login() {

  const { handleLoginUser, loginError } = useUsers();
  const navigate = useNavigate();

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    const loginFormElement = event.target as HTMLFormElement;

    const element = event.target as HTMLFormElement;
    const inputs = element.querySelectorAll("input");

    const loggedUser = {
      userName: inputs[0].value,
      password: inputs[1].value,

    } as Partial<User>;

    handleLoginUser(loggedUser);
    loginFormElement.reset();

    if (loggedUser.userName === "" || loggedUser.password === "") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please, make sure you have filled in all the fields!',
        showConfirmButton: true,
        color: 'white',
        background:
          "linear-gradient(to left, rgba(20, 20, 20), rgba(0, 0, 0))",
      });
    }
  };

  useEffect(() => {
    if (loginError === null) {
      return;
    }

    if (loginError) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Invalid Username or password!',
        color: 'white',
        background:
          "linear-gradient(to left, rgb(68, 66, 66), rgba(0, 0, 0))",
      })
    }

    if (loginError === false) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        iconColor: 'red',
        title: `Welcome to Alex & Melanie !`,
        showConfirmButton: false,
        color: 'white',
        background:
          "linear-gradient(to left, rgb(146, 36, 36), rgba(0, 0, 0))",
        timer: 2000,
      });
      setTimeout(() => {
        navigate("/myCourses");
      }, 2000);
    }
  }, [loginError, navigate]);

  return (
    <div className={style.logInContainer}>
      <h2 className={style.logInTitle}>Log in</h2>

      <form onSubmit={handleSubmit} className={style.logInFormContainer}>

        <div className={style.formInputContainer}>
          <label htmlFor="user"></label>
          <input className={style.formInput} type="text" id="user" name="userName" placeholder="Username" autoComplete="off"/>
        </div>

        <div className={style.formInputContainer}>
          <label htmlFor="password"></label>
          <input className={style.formInput} type="password" id="password" name="password" placeholder="Password" autoComplete="off"/>
        </div>

        <div className={style.logInButtonFormInputContainer}>
          <button className={style.logInButton} type="submit" aria-selected="true">Log in</button>
        </div>

      </form>
    </div>
  );
}
