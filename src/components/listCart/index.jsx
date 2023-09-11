import { StyledListCart } from "./listCart";
import { ProductsCardCart } from "./productsCardCart";

export const ListCart = ({ productsCart, setProductsCart }) => {
  const handleRemoveFromCart = productId => {
    if (confirm("Você deseja realmente excluir este produto?")) {
      const newProductsListCart = productsCart.filter(
        product => product.id !== productId
      );
      setProductsCart(newProductsListCart);
    }
  };
  return (
    <StyledListCart>
      {productsCart.map(product => (
        <ProductsCardCart
          key={product.id}
          {...product}
          handleRemoveFromCart={handleRemoveFromCart}
        />
      ))}
    </StyledListCart>
  );
};
