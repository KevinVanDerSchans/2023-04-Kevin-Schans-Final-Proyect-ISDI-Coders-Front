import { LogInAndSignUpButton } from './logInAndSignUpButton/logInAndSignUpButton';
import { MyCart } from './myCart/myCart';
import style from './navControls.module.css'
import { SelectLanguage } from './selectLanguage/selectLanguage';

export function NavControls() {
  return (
    <>
    <div className={style.navControls}>
      <LogInAndSignUpButton></LogInAndSignUpButton>
      <MyCart></MyCart>
      <SelectLanguage></SelectLanguage>
    </div>
    </>
  )
}
