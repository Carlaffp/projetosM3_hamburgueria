import { ProductCard } from "./productCard";
import { StyledSection } from "./sectionList";

export const SectionListProducts = ({
  filteredeProducts,
  addproductsToCart,
}) => {
  return (
    <StyledSection>
      {filteredeProducts.map(product => (
        <ProductCard
          key={product.id}
          addproductsToCart={addproductsToCart}
          {...product}
        />
      ))}
    </StyledSection>
  );
};
