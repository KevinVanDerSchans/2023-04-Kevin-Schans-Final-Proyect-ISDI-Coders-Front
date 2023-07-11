import { Header } from '../header/header';
import { NavOptions } from '../../types/nav.options';
import { Footer } from '../footer/footer';
import { Hero } from './hero/hero';
import { TopCourses } from './top.courses/top.courses';
import { LearnOnline } from './learn.online/learn.online';
import style from "./home.module.css";

export default function Home() {
  const options: NavOptions[] = [
    { url: '/', label: 'HOME' },
    { url: '/myCourses', label: 'MY COURSES' },
    { url: '/contact', label: 'CONTACT' }
  ];

  return (
    <>
    <div className={style.main}>

      <Header options={options}></Header>
      <Hero></Hero>
      <TopCourses></TopCourses>
      <LearnOnline></LearnOnline>
      <Footer></Footer>

      </div>
    </>
  );
}
