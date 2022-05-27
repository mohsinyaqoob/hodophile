import Layout from "../component/Layout";
import "../styles/globals.css";
import styles from "../styles/Home.module.css";
import "antd/dist/antd.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
