import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('../home/home'));
const MyCourses = lazy(() => import('../myCourses/myCourses'));

const LogInAndSignUp = lazy(() => import('../logInAndSignUp/logInAndSignUp'));

export function AppRoutes() {
  return (
    <Suspense>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/myCourses' element={<MyCourses></MyCourses>}></Route>
        <Route path='/logInAndSignUp' element={<LogInAndSignUp></LogInAndSignUp>}></Route>
      </Routes>
    </Suspense>
  );
}
