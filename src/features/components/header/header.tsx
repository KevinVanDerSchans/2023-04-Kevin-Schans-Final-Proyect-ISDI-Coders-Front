import { NavControls } from '../navControls/nav.controls';
import { Nav } from '../nav/nav';
import { Link } from 'react-router-dom';
import style from './header.module.css';
import { NavOptions } from '../../types/nav.options';

export type Propstype = {
  options: NavOptions[];
}

export function Header({ options }: Propstype) {
  return (
      <header className={style.header} id="header">
        <div className={style.logoContainer}>
          <Link to='/'>
            <img className={style.logo} src='/assets/logo.png' alt="Alex & Melanie's company logo"/>
          </Link>
        </div>
        <NavControls></NavControls>
        <Nav options={options}></Nav>
      </header>
  );
}
