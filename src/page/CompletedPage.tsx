import React from 'react';
import { BinList } from '../components/BinList';
import { useAppSelector } from '../customHook/redux';

export const BinPage: React.FC = () => {
  const { bin } = useAppSelector(state => state)
  
  if (bin.length === 0) {
    return <h2>Bin is empty</h2>
  }
  
  return (
    <BinList />
  );
};
