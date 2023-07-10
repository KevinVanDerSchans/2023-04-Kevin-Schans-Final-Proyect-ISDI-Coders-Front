import { SyntheticEvent } from "react";
import { useUsers } from "../../hooks/use.users";
import { User } from "../../models/user";
import Swal from "sweetalert2";
import style from "../register/register.module.css"

export default function Register() {

  const { handleRegisterUser } = useUsers();

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const formElement = event.target as HTMLFormElement;

    const data = {
      userName: (formElement.elements.namedItem("user") as HTMLInputElement).value,
      email: (formElement.elements.namedItem("email") as HTMLInputElement).value,
      password: (formElement.elements.namedItem("password") as HTMLInputElement).value,
    } as Partial<User>;

    if (data.userName === "" || data.email === "" || data.password === "") {
      Swal.fire({
        icon: 'error',
        iconColor: 'red',
        title: 'Oops...',
        text: 'Please, make sure you have filled in all the fields!',
        color: 'white',
        background:
          "linear-gradient(to left, rgb(146, 36, 36), rgba(0, 0, 0))",
        imageAlt: 'Feedback alert for error register.',
        showConfirmButton: true,
      });

    } else {
      handleRegisterUser(data);
      formElement.reset();

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: `Welcome ${data.userName} !`,
        text: 'Account successfully created.',
        showConfirmButton: true,
        color: 'white',
        background:
          "linear-gradient(to bottom, rgb(146, 36, 36), rgba(0, 0, 0))",
        imageAlt: 'Feedback alert for successfully register.',

      });
    }
  };

  return (
    <div className={style.registerContainer}>
      <h2 className={style.registerTitle}>Register</h2>

      <form onSubmit={handleSubmit} className={style.registerFormContainer}>

        <div className={style.registerFormContainer}>
          <label htmlFor="user"></label>
          <input className={style.formInput} type="text" id="user" name="user" placeholder="Username" autoComplete="off"/>
        </div>

        <div className={style.registerFormContainer}>
          <label htmlFor="email"></label>
          <input className={style.formInput} type="email" id="email" name="email" placeholder="E-mail address" autoComplete="off"/>
        </div>

        <div className={style.registerFormContainer}>
          <label htmlFor="password"></label>
          <input className={style.formInput} type="password" id="password" name="password" role="textbox" data-testid="password" placeholder="Password" autoComplete="off"/>
        </div>

        <div className={style.registerButtonFormInputContainer}>
          <button className={style.registerButton} role="button" type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}
