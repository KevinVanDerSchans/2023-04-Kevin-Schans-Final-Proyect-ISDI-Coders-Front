import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import style from "../user.interface/user.interface.module.css"

export function UserInterface() {
  return (
    <Link to='/'>
      <div className={style.userInterfaceContainer}>
        <FontAwesomeIcon className={style.userInterfaceIcon} icon={faUser} size="2x" style={{color: "#e5e5e6"}} role="icon" aria-hidden="true" aria-label="User interface to review your data" />
      </div>
    </Link>
  )
}
