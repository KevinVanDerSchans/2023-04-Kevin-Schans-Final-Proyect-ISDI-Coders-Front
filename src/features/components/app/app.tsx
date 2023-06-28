import { AppRoutes } from '../app.routes/app.routes';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

export function App() {
  return (
    <>
      <AppRoutes></AppRoutes>
      <Header></Header>
      <Footer></Footer>
    </>
  )
}
