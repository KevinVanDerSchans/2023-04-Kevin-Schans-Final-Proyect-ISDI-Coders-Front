import { Header } from "../../../header/header";
import { NavOptions } from "../../../../types/nav.options";
import { DanceCourseDetails } from "./danceCourse.details/danceCourse.details";

export default function DanceCourseDetailsPage() {

  const options: NavOptions[] = [
    { url: '/', label: 'HOME' },
    { url: '/myCourses', label: 'MY COURSES' },
    { url: '/contact', label: 'CONTACT' }
  ];

  return (
    <>
      <Header options={options}></Header>
      <DanceCourseDetails></DanceCourseDetails>
    </>
  );
}
