import { Nav } from '../nav/nav';
import { NavOptions } from '../../types/nav.options';

export default function Home() {
  const options: NavOptions[] = [
    { url: '/', label: 'HOME' },
    { url: '/myCourses', label: 'MY COURSES' },
  ];

  return (
    <Nav options={options}></Nav>
  );
}
