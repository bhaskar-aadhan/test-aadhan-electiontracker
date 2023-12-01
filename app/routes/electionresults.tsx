import React from "react";
import type { MetaFunction } from "@remix-run/cloudflare";
import { Outlet } from "@remix-run/react";
import { WebscoketProvider } from '~/services/context/ElectionService';

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <WebscoketProvider>
      <Outlet />
    </WebscoketProvider>

  );
}
