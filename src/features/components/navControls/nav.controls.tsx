import { LogInAndSignUpButton } from './log.in.and.sign.up.button/log.in.and.sign.up.button';
import { MyCart } from './my.cart/my.cart';
import { SelectLanguage } from './select.language/select.language';
import { UserInterface } from './user.interface/user.interface';
import style from "../navControls/nav.controls.module.css"

import { useNavigate } from "react-router-dom";
import { useUsers } from "../../hooks/use.users";
import { useSelector } from "react-redux";
import { RootState } from "../../../core/store/store";

export function NavControls() {

  const { handleLogoutUser } = useUsers();
  const navigate = useNavigate();

  const { token, currentUser } = useSelector((state: RootState) => state.users);

  const handleUser = () => {
    if (token) {
      runLogout();

    } else {
      navigate('/logInAndSignUp')
    }
  };

  const runLogout = () => {
    handleLogoutUser();
  }

  return (
    <div className={style.navControls}>

      {token ? (
        <>
          <span className={style.userGreeting}>Hello, {currentUser?.userName}</span>
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
