import styled from "styled-components";
export const StyledSection = styled.ul`
width: 100%;
display: flex;
gap:1.25rem;
overflow-y:hidden;

@media(min-width: 768px){
  display flex;
  flex-wrap: wrap;
  justify-content: center;
  gap:3.5rem;
 
}

`;
