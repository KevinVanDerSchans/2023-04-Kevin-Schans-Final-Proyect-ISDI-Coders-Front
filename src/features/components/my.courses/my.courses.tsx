import { Header } from "../header/header";
import { NavOptions } from "../../types/nav.options";
import { Footer } from "../footer/footer";

export default function MyCourses() {

  const options: NavOptions[] = [
    { url: '/', label: 'HOME' },
    { url: '/myCourses', label: 'MY COURSES' },
    { url: '/contact', label: 'CONTACT '}
  ];

  return (
    <>
      <Header options={options}></Header>
      <Footer></Footer>
    </>
  );
}
