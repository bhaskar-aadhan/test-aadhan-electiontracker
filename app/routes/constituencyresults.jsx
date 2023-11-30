import React from 'react';
import { ConstituencyProvider } from '../services/context/ConstituencyService';
import { Constituency } from '../components/ConstituencyResultsMobile';

const ConstituencyResults = () => {
  return (
    <ConstituencyProvider>
      <Constituency />
    </ConstituencyProvider>
  )
}

export default ConstituencyResults