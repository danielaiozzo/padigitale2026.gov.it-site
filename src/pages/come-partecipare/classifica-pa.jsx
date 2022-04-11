import React, { useEffect, useContext } from 'react';
import { GlobalStateContext } from '../../context/globalContext';
import { ClassificaPaPage } from '../../layouts/ClassificaPaPage';

const Page = () => {
  const [, dispatch] = useContext(GlobalStateContext);

  useEffect(() => {
    dispatch({ type: 'SET:ACTIVE_HEADER', payload: { activeItem: 'come-partecipare' } });
    return () => {
      dispatch({ type: 'SET:ACTIVE_HEADER' });
    };
  }, [dispatch]);
  return <ClassificaPaPage />;
};
export default Page;
