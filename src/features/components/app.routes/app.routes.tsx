import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('../home/home'));
const MyCourses = lazy(() => import('../my.courses/my.courses'));
const DiscoverYourStylePage = lazy(() => import('../discover.your.style.page/discover.your.style.page'));
const Gallery = lazy(() => import('../gallery/gallery.page'));
const WhoAreWe = lazy(() => import('../who.are.we/who.are.we.page'));
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
        <Route path='/discoverYourStyle' element={<DiscoverYourStylePage></DiscoverYourStylePage>}></Route>
        <Route path='/gallery' element={<Gallery></Gallery>}></Route>
        <Route path='/whoAreWe' element={<WhoAreWe></WhoAreWe>}></Route>
        <Route path='/*' element={<Contact></Contact>}></Route>

        <Route path='/logInAndSignUp' element={<LogInAndSignUp></LogInAndSignUp>}></Route>
        <Route path='/details/:id' element={<DanceCourseDetailsPage></DanceCourseDetailsPage>}></Route>
        <Route path='/form' element={<FormPage></FormPage>}></Route>
        <Route path='/edit/:id' element={<ModifyForm></ModifyForm>}></Route>
      </Routes>
    </Suspense>
  );
}
