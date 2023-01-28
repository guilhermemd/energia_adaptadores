import "./Catalog.css";
import { useNavigate } from "react-router-dom";

import data from "../../Mock/produtos.json";

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

const { products } = data;

const Catalog = () => {
  const history = useNavigate();
  return (
    <div className="catalog">
      <div className="catalog__wrapper">
        {products.map((item, index) => (
          <div className="catalog__card" key={index}>
            <img
              src={slides[index]}
              alt={index}
              className="catalog__product__img"
            />
            <div className="catalog__product__details">
              <div className="catalog__product__name">{item.name}</div>
              <div className="catalog__product__unidad">
                Valor por unidade:{" "}
              </div>
              <div className="catalog__product__price">R$ {item.price}</div>
              <button
                onClick={() => history(`/product/${item.id}`)}
                className="catalog__product__btn"
              >
                Ver Detalhes
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
