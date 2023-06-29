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
      userName: (formElement.user as HTMLInputElement).value,
      email: (formElement.email as HTMLInputElement).value,
      password: (formElement.password as HTMLInputElement).value,

    } as unknown as Partial<User>;
    handleRegisterUser(data);
    formElement.reset();

    Swal.fire(
      'You have successfully registered!',
    )
  };

  return (
      <div className={style.signUpContainer}>
        <h2 className={style.signUpTitle}>Sign up</h2>

        <form onSubmit={handleSubmit} className={style.signUpFormContainer}>

          <div className={style.formInputContainer}>
            <label htmlFor="user"></label>
            <input className={style.formInput} type="text" id="user" name="user" placeholder="Username" />
          </div>

          <div className={style.formInputContainer}>
            <label htmlFor="email"></label>
            <input className={style.formInput} type="email" id="email" name="email" placeholder="E-mail address"/>
          </div>

          <div className={style.formInputContainer}>
            <label htmlFor="password"></label>
            <input className={style.formInput} type="password" id="password" name="password" placeholder="Password"/>
          </div>

          <div className={style.formInputContainer}>
            <button className={style.signUpButton} type="submit">Sign Up</button>
          </div>

        </form>
        </div>
  );
}
