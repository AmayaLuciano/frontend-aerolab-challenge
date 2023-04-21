'use client';

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from 'react';

type DataType = {
  firstName: string;
};

interface ContextProps {
  order: string;
  setOrder: Dispatch<
    SetStateAction<'Most recent' | 'Highest price' | 'Lowest price'>
  >;
  data: DataType[];
  setData: Dispatch<SetStateAction<DataType[]>>;
}

const GlobalContext = createContext<ContextProps>({
  order: '',
  setOrder: (): string => '',
  data: [],
  setData: (): DataType[] => [],
});

export const GlobalContextProvider = ({ children }: any) => {
  const [order, setOrder] = useState<
    'Most recent' | 'Highest price' | 'Lowest price'
  >('Most recent');
  const [data, setData] = useState<[] | DataType[]>([]);

  return (
    <GlobalContext.Provider value={{ order, setData, setOrder, data }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
