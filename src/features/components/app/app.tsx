import { AppRoutes } from '../app.routes/app.routes';
import { useEffect } from 'react';
import { useUsers } from '../../hooks/use.users';
import { store } from '../../../core/store/store';

export function App() {

  const { handleGetToken } = useUsers();
  const userToken = store.getState().users.currentUser.token;

  useEffect(() => {
    const loggedUserToken = localStorage.getItem('usertoken');

    if (loggedUserToken) {
      handleGetToken(loggedUserToken);
      localStorage.setItem('userToken', loggedUserToken);
    };
  })

  return (
    <>
      <AppRoutes></AppRoutes>
    </>
  );
}
