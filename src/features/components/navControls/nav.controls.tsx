import { LogInAndSignUpButton } from './log.in.and.sign.up.button/log.in.and.sign.up.button';
import { MyCart } from './my.cart/my.cart';
import { SelectLanguage } from './select.language/select.language';
import { UserInterface } from './user.interface/user.interface';
import style from "../navControls/nav.controls.module.css"

import { Link, useNavigate } from "react-router-dom";
import { useUsers } from "../../hooks/use.users";
import { useSelector } from "react-redux";
import { RootState, store } from "../../../core/store/store";
import Swal from 'sweetalert2';

export function NavControls() {

  const { handleLogoutUser } = useUsers();
  const navigate = useNavigate();

  const { token } = useSelector((state: RootState) => state.users);

  const handleUser = async () => {
    if (token) {
      runLogout();

    } else {
      navigate('/logInAndSignUp');
    }
  };

  const runLogout = () => {
    handleLogoutUser();

    const Toast = Swal.mixin({
      toast: true,
      position: 'center',
      showConfirmButton: false,
      timer: 2300,
      timerProgressBar: true,
      color: 'white',
        background:
          "linear-gradient(to left, rgb(146, 36, 36), rgba(0, 0, 0))",
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: 'success',
      iconColor: 'red',
      title: "You've successfully logged out!",
      text: 'Hope to see you soon!'
    })
  }

  const admin = store.getState().users.role;

  return (
    <div className={style.navControls}>

      {
        admin === 'admin' ?
        <div className={style.createANewCourseButtonContainer}>
          <Link to="/form">
            <button className={style.createANewCourseButton}>Create new course</button>
          </Link>
        </div>

        : ""
      }

      { token ? (
        <>
          <button onClick={handleUser} className={style.logOutButton}>Log out</button>
        </>
      ) : (
        <>
          <span onClick={handleUser}><LogInAndSignUpButton></LogInAndSignUpButton></span>
        </>
      )
      }

      <MyCart></MyCart>
      <UserInterface></UserInterface>
      <SelectLanguage></SelectLanguage>
    </div>
  );
}
