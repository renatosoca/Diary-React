import { Routes, Route, Navigate } from 'react-router-dom';

import { HomePage } from '../pages';

export const PrincipalRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/*" element={<Navigate to='/' />} />
    </Routes>
  )
}
