import { dehydrate, Hydrate } from '@tanstack/react-query';
import getQueryClient from './getQueryClient';
import { getProducts } from '../utils/functions';
import DisplayProducts from '../components/DisplayProducts';
import { ProductsType } from '@/types';
import MDisplayProducts from '../components/Mobile/MDisplayProducts';
import TDisplayProducts from '../components/Mobile/TDisplayProucts';

// type Props = {
//   data: ProductsType[];
// };

export default async function HydratedProducts() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(['products'], getProducts);
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <DisplayProducts />

      <MDisplayProducts />
      <TDisplayProducts />
    </Hydrate>
  );
}
