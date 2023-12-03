import React from "react";
import { Outlet } from "@remix-run/react";
import { WebscoketProvider } from '~/services/context/ElectionService';

export const meta = () => {
  return [
    { title: "Aadhan Election Tracker" },
    { name: "description", content: "Aadhan Media Short News App" },
  ];
};

export default function Index() {
  return (
    <WebscoketProvider>
      <Outlet />
    </WebscoketProvider>

  );
}
