import { LogInAndSignUpButton } from './logInAndSignUpButton/logInAndSignUpButton';
import { MyCart } from './myCart/myCart';
import style from './navControls.module.css'
import { SelectLanguage } from './selectLanguage/selectLanguage';
import { UserInterface } from './userInterface/userInterface';

export function NavControls() {
  return (
    <div className={style.navControls}>
      <LogInAndSignUpButton></LogInAndSignUpButton>
      <MyCart></MyCart>
      <UserInterface></UserInterface>
      <SelectLanguage></SelectLanguage>
    </div>
  )
}
