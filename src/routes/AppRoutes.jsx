import { Routes, Route } from 'react-router-dom';

import { AuthRoutes, JournalRoutes } from './';

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Login y Register */}
      <Route path='/auth/*' element={ <AuthRoutes /> } />
      
      {/* Principal */}
      <Route path='/*' element={ <JournalRoutes /> } />
    </Routes>
  )
}
