import { Link } from 'react-router-dom';
import style from './myCart.module.css';
export function MyCart() {
  return (
    <>
      <div className={style.myCartContainer}>
        <Link to='/'>
          <button className={style.myCartButton}></button>
        </Link>
      </div>
    </>
  )
}
