import { Header } from "../../../header/header";
import { NavOptions } from "../../../../types/nav.options";
import { DanceCourseDetails } from "./danceCourse.details/danceCourse.details";

export default function DanceCourseDetailsPage() {

  const options: NavOptions[] = [
    { url: '/', label: 'HOME' },
    { url: '/myCourses', label: 'MY COURSES' },
    { url: '/discoverYourStyle', label: 'DISCOVER YOUR STYLE'},
    { url: '/gallery', label: 'GALLERY' },
    { url: '/whoAreWe', label: 'WHO ARE WE?'},
    { url: '/contact', label: 'CONTACT' },
  ];

  return (
    <>
      <Header options={options}></Header>
      <DanceCourseDetails></DanceCourseDetails>
    </>
  );
}
