import { Navigate, Route, Routes } from 'react-router';
import Layout from './layout/Layout';
import HomePage from './pages/HomePage';
import AuthCallbackPage from './pages/AuthCallbackPage';
import queryClient from './api/queryClient';
import { QueryClientProvider } from '@tanstack/react-query';
import UserProfilePage from './pages/UserProfilePage';
import ProtectedRoute from './auth/ProtectedRoute';

const AppRoutes = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Layout showHero={true}><HomePage /></Layout>} />
        <Route path='/auth-callback'element={<AuthCallbackPage></AuthCallbackPage>}/>
        {/* proteccion de rutas*/}
           <Route element={<ProtectedRoute />}>
              <Route path="/user-profile" element={<Layout><UserProfilePage /></Layout>} />
           </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </QueryClientProvider>
  );
};

export default AppRoutes;