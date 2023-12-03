import React from "react";
import { Election } from '../components/ElectionResuts';
import { WebscoketProvider } from "~/services/context/ElectionService";

const electionresults = () => {
  return (
    <WebscoketProvider>
      <Election />
    </WebscoketProvider>
  )
}

export default electionresults