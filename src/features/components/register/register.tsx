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
    } as unknown as Partial<User>;

    if (data.userName === "" || data.email === "" || data.password === "") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please, make sure you have filled in all the fields!',
      });
    } else {
      handleRegisterUser(data);
      formElement.reset();
    }
  };

  return (
      <div className={style.registerContainer}>
        <h2 className={style.registerTitle}>Register</h2>

        <form onSubmit={handleSubmit} className={style.registerFormContainer}>

          <div className={style.registerFormContainer}>
            <label htmlFor="user"></label>
            <input className={style.formInput} type="text" id="user" name="user" placeholder="Username" />
          </div>

          <div className={style.registerFormContainer}>
            <label htmlFor="email"></label>
            <input className={style.formInput} type="email" id="email" name="email" placeholder="E-mail address" />
          </div>

          <div className={style.registerFormContainer}>
            <label htmlFor="password"></label>
            <input className={style.formInput} type="password" id="password" name="password" placeholder="Password" />
          </div>

          <div className={style.registerButtonFormInputContainer}>
            <button className={style.registerButton} type="submit">Register</button>
          </div>

        </form>
      </div>
  );
}
