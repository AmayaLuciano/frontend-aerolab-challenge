import ProductsHeader from './ProductsHeader';
import DisplayProducts from './DisplayProducts';
import { getProducts } from '../utils/functions';
import { ProductsType } from '@/types';
import { Hydrate } from '@tanstack/react-query';
import HydratedProducts from '../util/HydrateClient';

type Props = {
  // data: ProductsType[];
};

const Products = async (props: Props) => {
  const data: ProductsType[] = await getProducts();
  return (
    <div id="products" className="xl:mt-[280px] xl:h-[2598px] w-full">
      <ProductsHeader />
      {/* @ts-expect-error Server Component */}
      <HydratedProducts />
    </div>
  );
};

export default Products;
