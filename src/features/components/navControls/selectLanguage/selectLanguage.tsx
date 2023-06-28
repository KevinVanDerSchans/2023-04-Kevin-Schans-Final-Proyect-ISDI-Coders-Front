import { Link } from 'react-router-dom';
import style from './selectLanguage.module.css';

export function SelectLanguage() {
  return (
      <div className={style.selectLanguageContainer}>
        <Link to='/'>
          <img className={style.englishLanguageImage} style={{width: '100%', height: '3em'}} src='/assets/englishFlag.png' alt='Flag to change language'/>
        </Link>
      </div>
  )
}
