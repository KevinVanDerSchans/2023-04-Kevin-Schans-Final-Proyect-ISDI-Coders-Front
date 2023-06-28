import { Link } from "react-router-dom";
import style from "./header.module.css"

export function Header() {
  return (
    <>
      <header className={style.header}>
        <div className={style.logoContainer}>
          <Link to="/">
            <img className={style.logo} src="/assets/logo.png" alt="Alex & Melanie company Logo"/>
          </Link>
        </div>
      </header>
    </>
  );
}
