import { useState } from "react";

import Context from "./Context";

function Provider({ children }) {
  const [cart, setCart] = useState([]);

  const addProductToCart = (product) => {
    setCart([...cart, product]);
  };

  console.log({ cart });

  const contextValue = { addProductToCart };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

export default Provider;
