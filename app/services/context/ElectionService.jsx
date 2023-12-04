import { createContext, useState, useEffect } from "react";
import { ballotGif } from "~/assets/images";
import { useQuery, dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
export const ElectionContext = createContext("aadhan");

export const getElectionData = async () => {
  const response = await fetch(
    `https://cmsapis.aadhan.in/election-results/election`
  );
  const electionData = await response.json();
  const data = await electionData;
  console.log("eld", data);
  return data;
};

export const loader = async () => {
  const queryClient = new QueryClient();
  try {
    await queryClient.prefetchQuery({
      queryKey: ["election"],
      queryFn: getElectionData,
    });
    return json({ dehydratedState: dehydrate(queryClient) });
  }
  catch (error) {
    console.log("index prefecth error", error);
  }
};

export const WebscoketProvider = ({ children }) => {
  const [webSocketData, setWebSocketData] = useState(null);
  const [stateName, setStateName] = useState("Mizoram");
  const [interval, setInterval] = useState(30000);
  //REST API
  const apiDataQuery = useQuery({
    queryKey: ['election'],
    queryFn: getElectionData,
    refetchInterval: interval,
    refetchOnWindowFocus: true,
    refetchOnMount: true,
    refetchOnReconnect: true
  })

  useEffect(() => {
    setWebSocketData(apiDataQuery.data)
  }, [apiDataQuery.data])
  console.log("rest api data", webSocketData)

  if (apiDataQuery.isLoading || webSocketData === null) {
    return (
      <div className="min-h-screen grid place-content-center" style={{ background: `linear-gradient( -80deg , #d7e9ff, #7db3ff, #d7e9ff)` }}>
        <div className="">
          <img src={ballotGif} alt="ballot gif" />
        </div>
      </div>
    )
  }

  return (
    <ElectionContext.Provider value={[webSocketData, stateName, setStateName]}>
      {children}
    </ElectionContext.Provider>
  );
};
