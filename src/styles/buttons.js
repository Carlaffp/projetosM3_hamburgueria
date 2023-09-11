import styled from "styled-components";

export const StyledButtons = styled.button`
width: 6.625rem;
height: 2.5rem;
background: var(--color-grey-4);
border: 2px solid var(--color-grey-4);
border-radius: 8px;
color:#ffff;
font-size:14px;
font-weight: 600; 
font-family:var(--font-primary);

:hover{
  background: var(--color-primary);
  border: 2px solid var(--color-primary); 
}

`
export const StyledButtonCart = styled.button`
width: 100%;
height: 3.75rem;
background: var(--color-grey-100);
border: 2px solid var(--color-grey-100);
border-radius: 8px;
color:var(--color-grey-300);
font-size:16px;
font-weight: 600; 
font-family:var(--font-primary);

:hover{
  background: var(--color-grey-300);
  border: 2px solid var(--color-grey-300); 
  color:var(--color-grey-100);
}
`