import {
  Filter,
  FilterBy,
  FilterContainer,
  Header,
  HeaderLeft,
  HeaderRight,
  HeaderTitle,
  LeftVector,
  LeftVectorContainer,
  PageFilter,
  ProductSection,
  SortBy,
} from '@/components/styled/Products.styled';
import React from 'react';
import vector from '../../public/assets/icons/chevron-active.svg';

type Props = {};

const Products = (props: Props) => {
  return (
    <ProductSection>
      <HeaderTitle>
        <HeaderLeft>tech</HeaderLeft>
        <HeaderRight> products</HeaderRight>
      </HeaderTitle>
      <Header>
        <FilterContainer>
          <Filter>
            <FilterBy>
              <p>Filter by:</p>
              <button>
                <p>All Products</p>
                🔽
              </button>
            </FilterBy>
            <SortBy>
              <p>Sort by:</p>
              <button>Most recent</button>
              <button>Lowest Price</button>
              <button>Highest Price</button>
            </SortBy>
          </Filter>
        </FilterContainer>

        <PageFilter>
          <LeftVectorContainer>
            <LeftVector src={vector} alt="vector" />
          </LeftVectorContainer>
        </PageFilter>
      </Header>
    </ProductSection>
  );
};

export default Products;
