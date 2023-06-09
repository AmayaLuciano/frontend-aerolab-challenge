import ProductsHeader from './ProductsHeader';
import DisplayProducts from './DisplayProducts';
import { getProducts } from '../utils/functions';
import { ProductsType } from '@/types';
import HydratedProducts from '../util/HydrateClient';

type Props = {
  // data: ProductsType[];
};

const Products = async (props: Props) => {
  const data: ProductsType[] = await getProducts();
  return (
    <div
      id="products"
      className="  w-full px-5 lg:max-w-[1024px] mx-auto 2xl:max-w-[1500px]"
    >
      <ProductsHeader />
      {/* @ts-expect-error Server Component */}
      <HydratedProducts />
    </div>
  );
};

export default Products;
