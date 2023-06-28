import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

export function AppRoutes() {
  return (
    <Suspense>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </Suspense>
  );
}
