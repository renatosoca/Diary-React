import { Routes, Route } from 'react-router-dom';

import { AuthRoutes, JournalRoutes, PrincipalRoutes } from './';

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Publicas // Faltan Terminar // */}
      <Route path='/*' element={ <PrincipalRoutes /> } />

      {/* Login y Register */}
      <Route path='/auth/*' element={ <AuthRoutes /> } />
      
      {/* Privada */}
      <Route path='/journal/*' element={ <JournalRoutes /> } />
    </Routes>
  )
}
