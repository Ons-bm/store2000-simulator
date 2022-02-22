
import Layout from "../components/Layout";
import '../styles/globals.css'
import '../public/assets/css/bootstrap.min.css'
import '../public/assets/css/animate.min.css'
import '../public/assets/css/fontawesome-all.css'
import '../public/assets/css/style.css'
import '../public/assets/css/colors/switch.css'


function MyApp({ Component, pageProps }) {
  return (
          <Layout {...pageProps}>
            <Component {...pageProps} />
          </Layout>
  )
}

export default MyApp
