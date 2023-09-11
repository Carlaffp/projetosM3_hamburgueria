import { useState } from "react";
import logo from "../../assets/Logo.svg";
import button from "../../assets/buttonDisable.png";
import carrinho from "../../assets/carrinho.svg";
import { StyledDiv, StyledForm, StyledHeader } from "./header";
import { StyledInputs } from "../../styles/inputs";

export const Header = ({ setInputSearch, productsCart, setIsOpen }) => {
  return (
    <StyledHeader>
      <StyledDiv>
        <div className="divLogoAndCart">

        <img src={logo} alt="" />

<div className="divCartAndCounter">

        <img
          onClick={() => setIsOpen(true)}
          src={carrinho}
          className="cart"
          alt="carrinho de compras"
        />
        <span className="spanCart">{productsCart.length}</span>
</div>
        </div>
      <StyledForm>
        <form>
          <StyledInputs
            type="text"
            placeholder="Buscar"
            onChange={e => setInputSearch(e.target.value)}
          />
          <img className="buttonSearch" src={button} alt="" />
        </form>
      </StyledForm>
      </StyledDiv>
    </StyledHeader>
  );
};
