import { useEffect, useState } from "react";
import io from "socket.io-client";
import { API_URL, URL } from "../redux/action/types";
import { getPageHistory } from "../redux/action/frontend";
import { useDispatch } from "react-redux";
const ENDPOINT = API_URL;
let socket;
export default function IndexPage() {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [historyData, setHistoryData] = useState([]);
  useEffect(() => socketInitializer(), []);

  const socketInitializer = async () => {
    await fetch(ENDPOINT);
    socket = io(ENDPOINT);
    socket.on("connect", () => {
      console.log("connected");
    });
    socket.on("new_page_open", (dataHistory) => {
      //setHistoryData(prev => prev.push());
      console.log(dataHistory);
      setHistoryData((prevState) => [...prevState, dataHistory]);
    });
  };
  useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then((dataa) => {
        setData(dataa);
        if (dataa.ip) {
          dispatch(getPageHistory(dataa.ip)).then((res) => {
            if (res.success) {
              setHistoryData(res.data);
              socket.emit("createRoom", dataa.ip);
            }
          });
        }
      });
  }, [data.ip]);
  
  return (
    <div
      className="text-center"
      style={{ border: "1px solid", margin: "30px" }}
    >
      <h1>IP Details</h1>
      <p>IP Address: {data.ip}</p>
      <p>
        {historyData &&
          historyData.length > 0 &&
          historyData.map((historyRecevied, index) => (
            <li key={index}>{historyRecevied.page_visited_url}</li>
          ))}
      </p>
    </div>
  );
}
