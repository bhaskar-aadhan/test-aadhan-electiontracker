import React from 'react';
import { Outlet } from '@remix-run/react';

export const meta = () => {
  return [
    { title: "Aadhan Election Tracker" },
    { name: "description", content: "Aadhan Media Short News App" },
  ];
};

const ElectionresultsMobile = () => {
  return (
      <Outlet />
  )
}

export default ElectionresultsMobile