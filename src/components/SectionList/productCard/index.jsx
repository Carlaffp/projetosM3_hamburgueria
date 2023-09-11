import { StyledButtons } from "../../../styles/buttons";
import { StyledHeadline3, StyledHeadline4 } from "../../../styles/typography";
import { StyledCard } from "./productCard";

export const ProductCard = ({
  name,
  img,
  category,
  price,
  id,
  addproductsToCart,
}) => {
  return (
    <StyledCard>
      <div className="divImage">
        <img src={img} alt={name} />
      </div>
      <div className="divInformation">
        <StyledHeadline3 fontSize="small">{name}</StyledHeadline3>
        <StyledHeadline4 fontSize="small" color="ligthGrey">{category}</StyledHeadline4>
        <StyledHeadline4 color="green" fontWeight="big" fontSize="medium">
          R$ {price.toFixed(2)}
        </StyledHeadline4>
        <StyledButtons onClick={() => addproductsToCart(id)}>
          Adicionar
        </StyledButtons>
      </div>
    </StyledCard>
  );
};
