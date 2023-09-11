import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  
  background: var(--color-grey-0);
  

  @media (min-width: 768px) {
   
  }
`;
export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0 auto;
  padding: 1rem;
  width: 100%;
  height: 10rem;
  margin-bottom: 0.875rem;

  @media (min-width: 768px) {
    max-width: 1200px;
    padding: 0 3.125rem;
    height: 5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    

  }

  .divLogoAndCart{
    padding: 20px 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

  }

  .divCartAndCounter{
        position:relative;
        width: 30px;
      }

  .cart {
    cursor: pointer;
  }

  .spanCart {
    width: 1.25rem;
    height: 1.5rem;
    border-radius: 7px;
    background: var(--color-primary);
    position: absolute;
    right:-8px;
    bottom:1.25rem;
    text-align: center;
    padding: 0.125rem;
    font-size: 0.875rem;
    font-family: var(--font-primary);
    font-weight: 900;
    color: #ffff;

  }
`;
export const StyledForm = styled.div`
  width: 100%;
  position: relative;

  @media (min-width: 768px) {
    max-width: 22.8125rem;
  }

  .buttonSearch {
    width: 53px;
    height: 40px;
    position: absolute;
    top: 10px;
    right: 13px;
  }
`;
