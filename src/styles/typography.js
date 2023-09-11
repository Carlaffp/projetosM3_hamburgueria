import styled, { css } from "styled-components";

export const StyledHeadlines = css`

font-weight:700;
font-family:var(--font-primary);
${({fontSize})=>{
  switch  (fontSize) {
      case "big":
        return css`
          font-size:1.625rem;
        `;
      case "medium":
        return css`
          font-size: 1.375rem;
        `;
      case "small":
        return css`
          font-size:1.125rem ;
        `;
    }
}}
`
export const StyledRegular = css`
${({color})=>{
  switch  (color) {
      case "grey":
        return css`
          color:var(--color-grey-600);
        `;
      case "ligthGrey":
        return css`
          color:var(--color-grey-300);
        `;
      case "green":
        return css`
          color:var(--color-primary);
        `;
    }
}}

font-family:var(--font-primary);

${({fontSize})=>{
  switch  (fontSize) {
      case "big":
        return css`
          font-size:1rem;
        `;
      case "medium":
        return css`
          font-size:0.875rem;
        `;
      case "small":
        return css`
          font-size:0.75rem;
        `;
    }
}}
${({fontWeight})=>{
  if(fontWeight==="big"){
    return css`
    font-weight:600;
    `
  }else{
    return css`
    font-weight:400;
    `
  }
}}

`

export const StyledHeadline1 = styled.h1`
color:var(--color-grey-600);
${StyledHeadlines}
`
export const StyledHeadline2 = styled.h2`
color:#ffff;
${StyledHeadlines}
`
export const StyledHeadline3 = styled.h3`
color:var(--color-grey-600);
${StyledHeadlines}
`
export const StyledHeadline4 = styled.p`
${StyledRegular}
`
