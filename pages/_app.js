import { useEffect } from "react";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import store from "../redux/store";
import setAuthToken from "../redux/setAuthToken";
import { loadUser } from "../redux/action/frontend";
import Cookies from "js-cookie";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Header from "../components/layout/Header";
import TabSection from "../components/layout/TabSection";
import Head from "next/head";
import Footmenu from "../components/layout/Footmenu";
import Footer from "../components/layout/Footer";
import { useRouter } from 'next/router'
function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const urlArray = (router.pathname.split("/"));
  if (Cookies.get("loggedIn")) {
    setAuthToken(Cookies.get("loggedIn"));
  }
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <>
      <Provider store={store}>
        <ToastContainer />
        <Head>
          <title>The Next JS project</title>
          <meta property="og:title" content="The Next JS project Wire" />
          <meta
            property="og:description"
            content="India’s First Next JS project Mapping, Trend Spotting Platform. Find Your Daily Dose Of Inspiration, Micro-Trends, News & Pop Next JS project."
          />
          <meta property="og:type" content="article" />
          <meta property="og:url" content="https://app.codeit.cloud/" />
          <meta
            property="og:image"
            content="https://app.codeit.cloud/images/logo.png"
          />
        </Head>
        <Header />
        {urlArray && urlArray.length> 1 && urlArray[1] != 'user-panel' && 
        <TabSection />}
        <Component {...pageProps} />
        <Footer />
        <Footmenu />
      </Provider>
    </>
  );
}

// initialize store and wrapper store
const makeStore = () => store;
const wrapper = createWrapper(makeStore);
export default wrapper.withRedux(MyApp);
