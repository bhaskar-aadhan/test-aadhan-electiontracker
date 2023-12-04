import React, { useState, useEffect, createContext } from 'react';
import { ballotGif } from "~/assets/images";
import { useQuery, dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
export const ConstituencyContext = createContext("aadhan mobile")

export const getElectionData = async () => {
  const response = await fetch(
    `https://cmsapis.aadhan.in/election-results/average-party`
  );
  const electionData = await response.json();
  const data = await electionData;
  console.log("eld", data);
  return data;
};
// export const getElection2Data = async () => {
//   const response = await fetch(
//     `https://cmsapis.aadhan.in/election-results/candidate`
//   );
//   const election2Data = await response.json();
//   const data = await election2Data;
//   console.log("el2d", data);
//   return data;
// };

export const loader = async () => {
  const queryClient = new QueryClient();
  try { 
    await queryClient.prefetchQuery({
      queryKey: ["election2"],
      queryFn: getElectionData,
    });
    // await queryClient.prefetchQuery({
    //   queryKey: ["election3"],
    //   queryFn: getElection2Data,
    // });
    return json({ dehydratedState: dehydrate(queryClient) });
  }
  catch (error) {
    console.log("index prefecth error", error);
  }
};

export const ConstituencyProvider = ({ children }) => {
  const [webSocketData, setWebSocketData] = useState(null);
  const [select, setSelect] = useState(true)
  const [stateNameMobile, setStateNameMobile] = useState("Mizoram")
  const [webSocket2Data, setWebSocket2Data] = useState(null);
  const [constituency, setConstituency] = useState("Gajwel")
  const [interval, setInterval] = useState(30000)

  //REST API
  const apiDataQuery = useQuery({
    queryKey: ['election2'],
    queryFn: getElectionData,
    refetchInterval: interval,
    refetchOnWindowFocus: true,
    refetchOnMount: true,
    refetchOnReconnect: true
  })
  // const api2DataQuery = useQuery({
  //   queryKey: ['election3'],
  //   queryFn: getElection2Data,
  //   refetchInterval: interval,
  //   refetchOnWindowFocus: true,
  //   refetchOnMount: true,
  //   refetchOnReconnect: true
  // })

  useEffect(() => {
    setWebSocketData(apiDataQuery.data)
  }, [apiDataQuery.data])
  // useEffect(() => {
  //   setWebSocket2Data(api2DataQuery.data)
  // }, [api2DataQuery.data])
  console.log("rest2, rest3 api data", webSocketData, apiDataQuery.data, apiDataQuery.status)

  if (apiDataQuery.isLoading || webSocketData === null || webSocketData === undefined) {
    return (
      <div className="min-h-screen grid place-content-center" style={{ background: `linear-gradient( -80deg , #d7e9ff, #7db3ff, #d7e9ff)` }}>
        <div className="">
          <img src={ballotGif} alt="ballot gif" />
        </div>
      </div>
    )
  }
  return (
    <ConstituencyContext.Provider value={[webSocketData, select, setSelect, stateNameMobile, setStateNameMobile, webSocket2Data, constituency, setConstituency]}>
      {children}
    </ConstituencyContext.Provider>
  )
}
