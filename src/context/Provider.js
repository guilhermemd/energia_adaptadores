import { useState } from "react";

import Context from "./Context";

function Provider({ children }) {
  const [cart, setCart] = useState([]);

  const addProductToCart = (product) => {
    setCart([...cart, product]);
  };

  const deleteProductCart = (productId) => {
    const deletedProduct = cart.filter((item) => item.id !== productId);

    setCart(deletedProduct);
  };

  console.log({ cart });

  const contextValue = { cart, addProductToCart, deleteProductCart };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

export default Provider;
