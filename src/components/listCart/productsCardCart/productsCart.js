import styled from "styled-components";
export const StyledProductsCart = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2.5rem;
  width: 100%;

  .divProduct {
    display: flex;
    gap: 0.625rem;
  }
  .image {
    width: 5.125rem;
    height: 5rem;
    background: var(--color-grey-100);
    border-radius: 5px;
  }
  .trash {
    cursor: pointer;
  }
`;
