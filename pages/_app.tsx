import AppContext, { AppProvider } from '../data/context/AppContext'
import '../styles/globals.css'
import { AuthProvider } from '../data/AuthContext'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </AuthProvider>
  )
}

export default MyApp
