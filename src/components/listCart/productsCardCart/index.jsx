import lixeira from "../../../assets/lixeira.svg";
import { StyledHeadline3 } from "../../../styles/typography";
import { StyledProductsCart } from "./productsCart";
export const ProductsCardCart = ({
  name,
  id,
  img,
  price,
  handleRemoveFromCart,
}) => {
  return (
    <StyledProductsCart>
      <div className="divProduct">
        <img className="image" src={img} alt="" />
        <StyledHeadline3 fontSize="small">{name}</StyledHeadline3>
      </div>
      <img
        className="trash"
        onClick={() => handleRemoveFromCart(id)}
        src={lixeira}
        alt=""
      />
    </StyledProductsCart>
  );
};
