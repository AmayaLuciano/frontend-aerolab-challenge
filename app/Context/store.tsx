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
  pageNumber: number;
  setPageNumber: Dispatch<SetStateAction<1 | 2>>;
  MpageNumber: number;
  setMPageNumber: Dispatch<SetStateAction<number>>;
  category: string;
  setCategory: Dispatch<
    SetStateAction<
      | 'All Products'
      | 'Tablets & E-readers'
      | 'Laptops'
      | 'Phones'
      | 'Drones'
      | 'Cameras'
      | 'Audio'
      | 'Smart Home'
      | 'Phone Accessories'
      | 'Monitors & TV'
      | 'Gaming'
    >
  >;
}

const GlobalContext = createContext<ContextProps>({
  order: '',
  setOrder: (): string => '',
  data: [],
  setData: (): DataType[] => [],
  pageNumber: 1 | 2,
  setPageNumber: (): number => 1 | 2,
  MpageNumber: 1 | 2 | 3 | 4,
  setMPageNumber: (): number => 1 | 2 | 3 | 4,
  category:
    'All Products' ||
    'Tablets & E-readers' ||
    'Laptops' ||
    'Phones' ||
    'Drones' ||
    'Cameras' ||
    'Audio' ||
    'Smart Home' ||
    'Phone Accessories' ||
    'Monitors & TV' ||
    'Gaming',
  setCategory: (): string =>
    'All Products' ||
    'Tablets & E-readers' ||
    'Laptops' ||
    'Phones' ||
    'Drones' ||
    'Cameras' ||
    'Audio' ||
    'Smart Home' ||
    'Phone Accessories' ||
    'Monitors & TV' ||
    'Gaming',
});

export const GlobalContextProvider = ({ children }: any) => {
  const [order, setOrder] = useState<
    'Most recent' | 'Highest price' | 'Lowest price'
  >('Most recent');
  const [data, setData] = useState<[] | DataType[]>([]);
  const [pageNumber, setPageNumber] = useState<1 | 2>(1);
  const [MpageNumber, setMPageNumber] = useState<number>(1);
  const [category, setCategory] = useState<
    | 'All Products'
    | 'Tablets & E-readers'
    | 'Laptops'
    | 'Phones'
    | 'Drones'
    | 'Cameras'
    | 'Audio'
    | 'Smart Home'
    | 'Phone Accessories'
    | 'Monitors & TV'
    | 'Gaming'
  >('All Products');

  return (
    <GlobalContext.Provider
      value={{
        order,
        setData,
        setOrder,
        data,
        pageNumber,
        setPageNumber,
        MpageNumber,
        setMPageNumber,
        category,
        setCategory,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
