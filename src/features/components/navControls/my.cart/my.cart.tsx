import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import style from "../my.cart/my.cart.module.css"

export function MyCart() {
  return (
    <Link to='/'>
      <div className={style.myCartContainer}>
        <FontAwesomeIcon className={style.myCartIcon} icon={faCartShopping} size="2x" style={{color: "#ddd5d5"}} aria-label="Online shopping cart for dance courses"/>
      </div>
    </Link>
  );
}
