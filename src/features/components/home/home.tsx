import { Header } from '../header/header';
import { NavOptions } from '../../types/nav.options';
import { Footer } from '../footer/footer';
import { Hero } from './hero/hero';
// import { store } from '../../../core/store/store';
// import style from "../home/home.module.css"

export default function Home() {
  const options: NavOptions[] = [
    { url: '/', label: 'HOME' },
    { url: '/myCourses', label: 'MY COURSES' },
    { url: '/contact', label: 'CONTACT' }
  ];
  /* TEMP
  const admin = store.getState().users.role;
  console.log(admin);

  if (admin === 'admin') {
    <span className={style.hola}>HOLA</span>
  }
  */

  return (
    <>
      <Header options={options}></Header>
      <Hero></Hero>
      <Footer></Footer>
    </>
  );
}
