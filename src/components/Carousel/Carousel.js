import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Carousel.css";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper";

import t_abs_tradicional from "../../img/produtos/t_abs_tradicional.jpeg";
import t_adaptador_10_20_quadrado from "../../img/produtos/t_adaptador_10_20_quadrado.jpeg";
import t_adaptador_10_20_sextavado from "../../img/produtos/t_adaptador_10_20_sextavado.jpeg";
import t_adaptador10_20a_tradicional from "../../img/produtos/t_adaptador10_20a_tradicional.jpeg";
import t_articulado from "../../img/produtos/t_articulado.jpeg";
import t_cubo_colorido_original from "../../img/produtos/t_cubo_colorido_original.jpeg";
import t_daptador_10_20a_coracao from "../../img/produtos/t_daptador_10_20a_coracao.jpg";
import t_parafusado_inverso_branco_preto from "../../img/produtos/t_parafusado_inverso_branco_preto.jpeg";
import t_parafusado_simples from "../../img/produtos/t_parafusado_simples.jpeg";

const slides = [
  t_abs_tradicional,
  t_adaptador_10_20_quadrado,
  t_adaptador_10_20_sextavado,
  t_adaptador10_20a_tradicional,
  t_articulado,
  t_cubo_colorido_original,
  t_daptador_10_20a_coracao,
  t_parafusado_inverso_branco_preto,
  t_parafusado_simples,
];

const Carousel = () => {
  return (
    <Swiper
      breakpoints={{
        // when window width is >= 640px
        640: {
          slidesPerView: 3.5,
        },
      }}
      slidesPerView={2.5}
      spaceBetween={8}
      slidesPerGroup={1}
      loop={true}
      loopFillGroupWithBlank={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      // autoplay={{
      //   delay: 5000,
      //   disableOnInteraction: false,
      // }}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="product__container">
            <img
              src={slide}
              key={index}
              alt={index}
              className="produtos__home"
            />
            <div className="product__name">Nome do produto</div>
            <div className="product__price">R$2,48</div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
