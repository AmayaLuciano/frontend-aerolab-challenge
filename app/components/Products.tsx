import { ProductsType } from '../../types';
import { ProductSection } from './styled/Products.styled';
import ProductsHeader from './ProductsHeader';
import DisplayProducts from './DisplayProducts';

type Props = {
  // data: ProductsType[];
};

const Products = (props: Props) => {
  return (
    <ProductSection>
      <ProductsHeader />
      <DisplayProducts />
    </ProductSection>
  );
};

export default Products;
