import React from "react";
import type { MetaFunction } from "@remix-run/cloudflare";
import { Election } from '../components/ElectionResuts';
import { WebscoketProvider } from "~/services/context/ElectionService";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
}

const electionresults = () => {
  return (
    <WebscoketProvider>
      <Election />
    </WebscoketProvider>
  )
}

export default electionresults