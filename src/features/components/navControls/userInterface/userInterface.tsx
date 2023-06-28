import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import style from './userInterface.module.css';

export function UserInterface() {
  return (
    <Link to='/'>
      <div className={style.userInterfaceContainer}>
        <FontAwesomeIcon icon={faUser} size="2x" style={{color: "#e5e5e6",}} />
      </div>
    </Link>
  )
}
