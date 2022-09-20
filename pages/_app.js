import '../styles/globals.css'
import Laytout from '../components/layout/Laytout'

function MyApp({ Component, pageProps }) {
  return (
    <Laytout>
      <Component {...pageProps} />
    </Laytout>
  )
}

export default MyApp
