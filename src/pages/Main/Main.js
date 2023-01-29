import { useContext } from "react";
import Context from "../../context/Context";
import "./Main.css";
import banner from "../../img/banner.png";

import Catalog from "../Catalog";
const Main = () => {
  const { msg } = useContext(Context);

  console.log({ msg });
  return (
    <>
      <img src={banner} alt="banner" className="banner" />
      <section className="main">
        <Catalog />
      </section>
    </>
  );
};

export default Main;
