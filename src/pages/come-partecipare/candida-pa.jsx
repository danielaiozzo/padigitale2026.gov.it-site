import React, { useEffect, useContext } from 'react';
import { GlobalStateContext } from '../../context/globalContext';
import { CandidaPaPage } from '../../layouts/CandidaPaPage';

const Page = () => {
  const [, dispatch] = useContext(GlobalStateContext);

  useEffect(() => {
    dispatch({ type: 'SET:ACTIVE_HEADER', payload: { activeItem: 'come-partecipare' } });
    return () => {
      dispatch({ type: 'SET:ACTIVE_HEADER' });
    };
  }, [dispatch]);
  return <CandidaPaPage />;
};
export default Page;
