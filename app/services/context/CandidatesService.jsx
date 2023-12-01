import React, { useState, useEffect, createContext } from 'react';
import { ballotGif, signalSpinner } from "~/assets/images";

export const CandidatesContext = createContext("aadhan mobile")

export const CandidatesProvider = ({ children }) => {
  const [webSocket2Data, setWebSocket2Data] = useState(null);
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
        "wss://stage-cmsapis.aadhan.in/election-results/ws1"
      );
      socket.onopen = () => {
        console.log("WebSocket2 connection opened");
      };
      socket.onmessage = (event) => {
        const wsdata = event.data;
        const wsData = JSON.parse(wsdata);
        setWebSocket2Data(wsData);
        console.log("websocket2 data: ", wsData, typeof wsData);
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
          setTimeout(initializeWebSocket, 1000);
        }
      };
      socket.onerror = (error) => {
        console.error("WebSocket error:", error);
      };
    };
    initializeWebSocket();
  }, []);

  if (webSocket2Data === null) {
    return (
      <div className="min-h-screen grid place-content-center">
        <div className="">
          {/* <img src={signalSpinner} className='animate-spin' alt="ballot gif" /> */}
        </div>     
      </div>
    )
  }
  return (
      <CandidatesContext.Provider value={[webSocket2Data,constituency,setConstituency]}>
        {children}
      </CandidatesContext.Provider>
    )
}
