import { NavOptions } from "../../types/nav.options";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { DanceCourseCreateForm } from "./danceCourse.create.form/danceCourse.create.form";

export default function Form() {

  const options: NavOptions[] = [
    { url: '/', label: 'HOME' },
    { url: '/myCourses', label: 'MY COURSES' },
    { url: '/contact', label: 'GALLERY' },
    { url: '/contact', label: 'WHO ARE WE?'},
    { url: '/contact', label: 'CONTACT' },
  ];

  return (
    <>
      <Header options={options}></Header>
      <DanceCourseCreateForm></DanceCourseCreateForm>
      <Footer></Footer>
    </>
  )
}
