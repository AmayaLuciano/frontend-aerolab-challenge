import React from 'react';
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
  NumberText,
  PageFilter,
  PageText,
  Pager,
  RightVector,
  RightVectorContainer,
  SortBy,
} from './styled/Products.styled';
import vector from '../../public/assets/icons/chevron-active.svg';

type Props = {};

const ProductsHeader = (props: Props) => {
  return (
    <>
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
          <Pager>
            <PageText>Page</PageText>
            <NumberText>1 of 2</NumberText>
          </Pager>
          <RightVectorContainer>
            <RightVector src={vector} alt="vector" />
          </RightVectorContainer>
        </PageFilter>
      </Header>
    </>
  );
};

export default ProductsHeader;
