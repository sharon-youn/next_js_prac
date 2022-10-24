import Layout from "../components/Layout";
import "../styles/globals.css"

// Layout의 children은 레이아웃 안에 있는  <Component {...pageProps} />
export default function App({Component, pageProps}) {
  return(
    <Layout>

    <Component {...pageProps} />
    <footer></footer>
    </Layout>
  )
}
