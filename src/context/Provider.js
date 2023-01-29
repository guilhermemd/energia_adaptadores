// import { useState } from "react";

import Context from "./Context";

function Provider({ children }) {
  const msg = "it is working";
  const contextValue = { msg };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

export default Provider;
