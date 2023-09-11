import styled from "styled-components";

export const StyledModalContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.25);
`;
export const StyledDivModal = styled.div`
  width: 90%;
  max-width: 23.4375rem;
  height: 25.6875rem;
  background: #fff;
  border-radius: 5px;

  @media (min-width: 768px) {
    max-width: 31.25rem;
  }
`;
export const StyledHeaderCart = styled.div`
  width: 100%;
  height: 3.375rem;
  background: var(--color-primary);
  border-radius: 5px 5px 0px 0px;
  padding: 0.8125rem 1.375rem;
  display: flex;
  justify-content: space-between;
`;
export const StyledFooterCart = styled.div`
  width: 100%;
  height: 9.6875rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.8125rem 1.375rem;

  .divPrice {
    border-top: 2px solid var(--color-grey-100);
    padding-top: 1.25rem;
    display: flex;
    justify-content: space-between;
  }
`;
