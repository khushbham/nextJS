import { useEffect, useState } from "react";
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
import io from "socket.io-client";

const ENDPOINT = "http://127.0.0.1:5000";
let socket;
function MyApp({ Component, pageProps }) {
  const [input, setInput] = useState("");
  if (Cookies.get("loggedIn")) {
    setAuthToken(Cookies.get("loggedIn"));
  }
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  useEffect(() => socketInitializer(), []);

  const socketInitializer = async () => {
    await fetch(ENDPOINT);
    socket = io(ENDPOINT);
    socket.on("connect", () => {
      console.log('connected');
    });
    socket.on("message", (msg) => {
      setInput(msg);
    });
    socket.on("chat message", (msg) => {
      setInput(msg);
    });
  };
  const onChangeHandler = (e) => {
    setInput(e.target.value);
    socket.emit("chat message", e.target.value);
  };
  return (
    <>
      <Provider store={store}>
        <ToastContainer />
        <input
          placeholder="Type something"
          value={input}
          onChange={onChangeHandler}
        />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

// initialize store and wrapper store
const makeStore = () => store;
const wrapper = createWrapper(makeStore);
export default wrapper.withRedux(MyApp);
