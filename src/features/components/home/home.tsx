import { Header } from '../header/header';
import { NavOptions } from '../../types/nav.options';
import { Footer } from '../footer/footer';
import { Hero } from './hero/hero';

export default function Home() {
  const options: NavOptions[] = [
    { url: '/', label: 'HOME' },
    { url: '/myCourses', label: 'MY COURSES' },
  ];

  return (
    <>
      <Header options={options}></Header>
      <Hero></Hero>
      <Footer></Footer>
    </>
  );
}
