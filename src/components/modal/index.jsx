import { useEffect } from "react";
import {
  StyledDivModal,
  StyledFooterCart,
  StyledHeaderCart,
  StyledModalContainer,
} from "./ModalStyled";
import { useRef } from "react";
import { ListCart } from "../listCart";
import { StyledHeadline2, StyledHeadline4 } from "../../styles/typography";
import { StyledButtonCart } from "../../styles/buttons";

export const ModalCart = ({ setIsOpen, productsCart, setProductsCart }) => {
  const totalPriceCart = productsCart.reduce(
    (total, currentProduct) => total + currentProduct.price,
    0
  );

  const modalRef = useRef(null);

  useEffect(() => {
    const handleOutClick = event => {
      if (!modalRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("mousedown", handleOutClick);
    return () => {
      window.removeEventListener("mousedown", handleOutClick);
    };
  }, []);

  const buttonRef = useRef(null);

  useEffect(() => {
    const handleKeydow = event => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeydow);
    return () => {
      window.removeEventListener("keydown", handleKeydow);
    };
  }, []);

  return (
    <StyledModalContainer role="dialog">
      <StyledDivModal ref={modalRef}>
        <StyledHeaderCart>
          <StyledHeadline2 fontSize="small">
            Carrinho de compras
          </StyledHeadline2>
          <button ref={buttonRef} onClick={() => setIsOpen(false)}>
            X
          </button>
        </StyledHeaderCart>
        <ListCart
          productsCart={productsCart}
          setProductsCart={setProductsCart}
        />
        <StyledFooterCart>
          <div className="divPrice">
            <StyledHeadline4 fontSize="medium" fontWeight="big" color="grey">
              Total
            </StyledHeadline4>
            <StyledHeadline4
              fontSize="medium"
              fontWeight="big"
              color="ligthGrey"
            >
              {" "}
              R$ {totalPriceCart.toFixed(2)}
            </StyledHeadline4>
          </div>
          <StyledButtonCart onClick={() => setProductsCart([])}>
            Remover todos
          </StyledButtonCart>
        </StyledFooterCart>
      </StyledDivModal>
    </StyledModalContainer>
  );
};
