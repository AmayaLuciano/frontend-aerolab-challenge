import ProductsHeader from './ProductsHeader';
import DisplayProducts from './DisplayProducts';

type Props = {
  // data: ProductsType[];
};

const Products = (props: Props) => {
  return (
    <div className="mt-[280px] h-[2598px] w-full">
      <ProductsHeader />
      {/* @ts-expect-error Async Server Component */}
      <DisplayProducts />
    </div>
  );
};

export default Products;
