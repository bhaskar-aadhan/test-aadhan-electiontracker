import React from 'react'
import { ConstituencyProvider } from '~/services/context/ConstituencyService';
import { Outlet } from '@remix-run/react';

export const meta = () => {
  return [
    { title: "Aadhan Election Tracker" },
    { name: "description", content: "Aadhan Media Short News App" },
  ];
};

const ConstituencyResults = () => {
  return (
    <ConstituencyProvider>
      <Outlet />
    </ConstituencyProvider>
  )
}

export default ConstituencyResults