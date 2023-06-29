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
    const loggedUser = {
      userName: (element.user as HTMLInputElement).value,
      password: (element.password as HTMLInputElement).value
    } as Partial<User>;
    handleLoginUser(loggedUser as Partial<User>)
    console.log(loggedUser)
    element.reset();

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Welcome!',
      showConfirmButton: false,
      timer: 2000
    })

    navigate('/');
  };

  return (
    <div className={style.logInContainer}>
      <h2>Log in</h2>
      <form onSubmit={handleSubmit}>

        <div>
          <label htmlFor="user">User or Email</label>
          <input type="text" id="user" name="userName"/>
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>

        <button type="submit">Log in</button>

      </form>
      </div>
  );
}
