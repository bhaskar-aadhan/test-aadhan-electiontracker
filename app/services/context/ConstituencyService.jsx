import React, { useState, useEffect, createContext } from 'react';
import { ballotGif } from "~/assets/images";

export const ConstituencyContext = createContext("aadhan mobile")

export const ConstituencyProvider = ({ children }) => {
  const [webSocketData, setWebSocketData] = useState(null);
  const [ select, setSelect ] = useState(true)
  const [ stateNameMobile, setStateNameMobile ] = useState("Telangana")
  const [ constituency, setConstituency ] = useState("Gajwel")

  //WEBSOCKET
  useEffect(() => {
    document.addEventListener("visibilitychange", handleVisibilityChange);
    function handleVisibilityChange() {
      if (document.visibilityState === "visible") {
        // App has come to the foreground
        initializeWebSocket();
      }
    }
    const initializeWebSocket = () => {
      console.log("initializeWebSocket");

      const socket = new WebSocket(
        "wss://stage-cmsapis.aadhan.in/election-results/ws2"
      );
      socket.onopen = () => {
        console.log("WebSocket connection opened");
      };
      socket.onmessage = (event) => {
        const wsdata = event.data;
        const wsData = JSON.parse(wsdata);
        setWebSocketData(wsData);
        console.log("websocket data: ", wsData, typeof wsData);
      };
      socket.onclose = (event) => {
        console.log(
          `WebSocket connection closed code=${event.code}, reason=${event.reason}`
        );
        if (event.wasClean) {
          console.log(
            `WebSocket connection closed cleanly, code=${event.code}, reason=${event.reason}`
          );
        } else {
          console.error("WebSocket connection abruptly closed");
          // setTimeout(initializeWebSocket, 1000);
        }
      };
      socket.onerror = (error) => {
        console.error("WebSocket error:", error);
      };
    };
    initializeWebSocket();
  }, []);

  if (webSocketData === null) {
    return (
      <div className="min-h-screen grid place-content-center" style={{ background: `linear-gradient( -80deg , #d7e9ff, #7db3ff, #d7e9ff)` }}>
        <div className="">
          <img src={ballotGif} alt="ballot gif" />
        </div>     
      </div>
    )
  }
  return (
      <ConstituencyContext.Provider value={[webSocketData,select,setSelect,stateNameMobile,setStateNameMobile,constituency,setConstituency]}>
        {children}
      </ConstituencyContext.Provider>
    )
}
