import { Header } from "../header/header";
import { NavOptions } from "../../types/nav.options";
import List  from "./list/list";
import { Footer } from "../footer/footer";
import { useSelector } from "react-redux";
import { RootState } from "../../../core/store/store";
import { PropagateLoader } from "react-spinners";

export default function MyCourses() {

  const options: NavOptions[] = [
    { url: '/', label: 'HOME' },
    { url: '/myCourses', label: 'MY COURSES' },
    { url: '/contact', label: 'GALLERY' },
    { url: '/contact', label: 'WHO ARE WE?'},
    { url: '/contact', label: 'CONTACT' },
  ];

  const { getDanceCourseState } = useSelector(
    (state: RootState) => state.danceCourses
  );

  return (
    <>
      <Header options={options}></Header>

      {getDanceCourseState === "loading" && (
        <PropagateLoader
          color="red"
          style={{
            marginTop: '4rem'
          }}
        />
      )}

      {getDanceCourseState === "loaded" && (
        <List></List>
      )}

      <Footer></Footer>
    </>
  );
}
