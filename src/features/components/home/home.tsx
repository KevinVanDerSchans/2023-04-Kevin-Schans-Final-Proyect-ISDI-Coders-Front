import { Nav } from '../nav/nav';


export default function Home() {
  const options: NavOptions[] = [
    { url: "/", label: "HOME" },
    { url: "/myCourses", label: "MY COURSES" },
  ];

  return (
    <Nav options={options}></Nav>
  )
}
