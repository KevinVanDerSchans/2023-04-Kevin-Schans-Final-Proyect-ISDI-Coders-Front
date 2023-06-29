import { LogInAndSignUpButton } from './logInAndSignUpButton/logInAndSignUpButton';
import { MyCart } from './myCart/myCart';
import { SelectLanguage } from './selectLanguage/selectLanguage';
import { UserInterface } from './userInterface/userInterface';

import { useNavigate } from "react-router-dom";
import { useUsers } from "../../hooks/use.users";
import { useSelector } from "react-redux";
import { RootState } from "../../../core/store/store";
import style from './navControls.module.css';

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
