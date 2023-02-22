import { AppRoutes } from './routes/AppRoutes'
import { AppTheme } from './theme'

export const App = () => {
  return (
    <AppTheme>
      <AppRoutes />
    </AppTheme>
  )
}