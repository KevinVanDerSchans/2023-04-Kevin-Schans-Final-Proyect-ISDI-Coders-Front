import { Header } from '../header/header';
import { NavOptions } from '../../types/nav.options';
import { Footer } from '../footer/footer';
import { Hero } from './hero/hero';
import { TopCourses } from './top.courses/top.courses';
import style from "./home.module.css";
import { DiscoverYourStyle } from './discover.your.style/discover.your.style';
import { AboutUs } from './about.us/about.us';

export default function Home() {
  const options: NavOptions[] = [
    { url: '/', label: 'HOME' },
    { url: '/myCourses', label: 'MY COURSES' },
    { url: '/contact', label: 'DISCOVER YOUR STYLE'},
    { url: '/contact', label: 'GALLERY' },
    { url: '/contact', label: 'WHO ARE WE?'},
    { url: '/contact', label: 'CONTACT' },
  ];

  return (
    <>
    <div className={style.main}>

      <Header options={options}></Header>
      <Hero></Hero>
      <TopCourses></TopCourses>
      <DiscoverYourStyle></DiscoverYourStyle>
      <AboutUs></AboutUs>
      <Footer></Footer>

      </div>
    </>
  );
}
