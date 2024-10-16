// PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
  const isAuthenticated = localStorage.getItem('isLoggedIn'); // 로그인 여부 체크

  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

export default PrivateRoute;
