import "./Main.css";
import banner from "../../img/banner.png";
import Carousel from "../../components/Carousel";
// import News from "../../components/News";
const Main = () => {
  return (
    <>
      <img src={banner} alt="banner" className="banner" />
      <section className="main">
        <Carousel />
      </section>
    </>
  );
};

export default Main;
