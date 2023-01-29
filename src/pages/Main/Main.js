import "./Main.css";
import banner from "../../img/banner.png";

import Catalog from "../Catalog";
const Main = () => {
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
