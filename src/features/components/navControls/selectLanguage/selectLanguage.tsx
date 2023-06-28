import { Link } from 'react-router-dom';
import style from './selectLanguage.module.css';

export function SelectLanguage() {
  return (
    <Link to='/'>
      <div className={style.selectLanguageContainer}>
        <img className={style.englishLanguageImage} src='/assets/englishFlag.png' alt='Flag to change language'/>
      </div>
    </Link>
  )
}
