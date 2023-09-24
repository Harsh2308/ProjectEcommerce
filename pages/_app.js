import { ProperyManagmentProvider } from '@/context/propertyContext'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <ProperyManagmentProvider><Component {...pageProps} /></ProperyManagmentProvider>
}
