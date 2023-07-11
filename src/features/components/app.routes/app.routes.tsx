import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('../home/home'));
const MyCourses = lazy(() => import('../my.courses/my.courses'));
const Contact = lazy(() => import('../contact/contact'));
const FormPage = lazy(() => import('../form/form.page'));
const ModifyForm = lazy(() => import('../edit.form/edit.form'))
const DanceCourseDetailsPage = lazy(() => import("../my.courses/list/danceCourse.details.page/danceCourse.details.page"));
const LogInAndSignUp = lazy(() => import('../logInAndSignUp/log.in.and.sign.up'));

export function AppRoutes() {
  return (
    <Suspense>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/myCourses' element={<MyCourses></MyCourses>}></Route>
        <Route path='/details/:id' element={<DanceCourseDetailsPage></DanceCourseDetailsPage>}></Route>
        <Route path='/logInAndSignUp' element={<LogInAndSignUp></LogInAndSignUp>}></Route>
        <Route path='/form' element={<FormPage></FormPage>}></Route>
        <Route path='/edit/:id' element={<ModifyForm></ModifyForm>}></Route>
        <Route path='/*' element={<Contact></Contact>}></Route>
      </Routes>
    </Suspense>
  );
}
