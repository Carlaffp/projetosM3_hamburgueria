import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { ModalCart } from "../../components/modal";
import { SectionListProducts } from "../../components/SectionList";
import { toast } from "react-hot-toast";
import { StyledContainer } from "../../styles/grid";
import { Header } from "../../components/header";

export const Feed = () => {
  const [productsList, setProductsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [inputSearch, setInputSearch] = useState("");
  const [productsCart, setProductsCart] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const filteredeProducts = productsList.filter(product =>
    product.name.toUpperCase().includes(inputSearch.toUpperCase())
  );

  const addproductsToCart = productId => {
    const newProducts = productsList.find(product => product.id === productId);
    const someProduct = productsCart.some(product => product.id === productId);
    if (someProduct) {
      toast.success("o produto já existe no carrinho");
    } else {
      setProductsCart([...productsCart, newProducts]);
    }
  };

  useEffect(() => {
    setIsLoading(true);

    async function loadData() {
      try {
        const response = await api.get("/products");
        setProductsList(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    loadData();
  }, []);

  return (
    <>
      <Header
        setInputSearch={setInputSearch}
        productsCart={productsCart}
        setIsOpen={setIsOpen}
      />
      <main>
        <StyledContainer>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <SectionListProducts
              filteredeProducts={filteredeProducts}
              addproductsToCart={addproductsToCart}
            />
          )}
        </StyledContainer>
      </main>
      {isOpen ? (
        <ModalCart
          setIsOpen={setIsOpen}
          productsCart={productsCart}
          setProductsCart={setProductsCart}
        ></ModalCart>
      ) : null}
    </>
  );
};
