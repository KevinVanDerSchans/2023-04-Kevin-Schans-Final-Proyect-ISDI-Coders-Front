import { AppRoutes } from '../app.routes/app.routes';
import { Header } from '../header/header';
import { Nav } from '../nav/nav';
import { Footer } from '../footer/footer';

export function App() {
  return (
    <>
      <AppRoutes></AppRoutes>
      <Header></Header>
      <Nav options={options}></Nav>
      <Footer></Footer>
    </>
  );
}
