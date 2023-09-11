import styled from "styled-components";

export const StyledCard = styled.li`
width: 18.75rem;
min-width: 18.75rem;
height: 21.625rem;
border: 2px solid var(--color-grey-100);
border-radius: 5px;
display flex;
flex-direction:column;
align-items: flex-start;

:hover{
  border: 2px solid var(--color-primary);
}


.divImage{
  width: 100%;
  height: 9.375rem;
  background: var(--color-grey-0);
  display: flex;
  align-items:center;
  justify-content: center;
}

.divInformation{
  width: 100%;
  height: 12.125rem;
  padding: 1.625rem 1.25rem;
  display: flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:flex-start;
  
}

`;
