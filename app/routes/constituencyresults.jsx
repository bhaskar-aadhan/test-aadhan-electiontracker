import React from 'react';
import { Outlet } from '@remix-run/react';
import { ConstituencyProvider } from '~/services/context/ConstituencyService';

const ConstituencyResults = () => {
  return (
    <ConstituencyProvider>
      <Outlet />
    </ConstituencyProvider>
  )
}

export default ConstituencyResults