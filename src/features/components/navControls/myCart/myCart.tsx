import { Link } from 'react-router-dom';
import style from './myCart.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
export function MyCart() {
  return (
    <Link to='/'>
      <div className={style.myCartContainer}>
      <FontAwesomeIcon icon={faCartShopping} size="2x" style={{color: "#ddd5d5",}} />
      </div>
    </Link>
  )
}
