import { useParams } from "react-router-dom";
import { useContext, useState } from "react";

import Context from "../../context/Context";

import "./ProductDetails.css";
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

const ProductDetails = () => {
  const { products } = data;
  const params = useParams();
  const { addProductToCart } = useContext(Context);
  const [activeDropdown, setActiveDropdown] = useState(false);

  console.log({ activeDropdown });
  const productToCart = products[params.id];

  return (
    <div className="productDetails">
      <div className="productDetails__wrapper">
        <div className="productDetails__carousel">
          <img src={slides[params.id]} alt={products[params.id].id} />
        </div>
        <div className="productDetails__infos">
          <div className="productDetails__name">{products[params.id].name}</div>
          <ul
            onClick={() => setActiveDropdown(!activeDropdown)}
            className="productDetails__quantity"
          >
            {products[params.id].quantity.map((item) => (
              <li className={activeDropdown ? "showDropdown" : "hideDropdown"}>
                {item}
              </li>
            ))}
          </ul>
          <div className="productDetails__price">
            Valor por unidade R$ {products[params.id].price}
          </div>
          <button
            onClick={() => addProductToCart(productToCart)}
            className="productDetails__btn"
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div>
      <div className="productDetails__description">
        {products[params.id].description}
      </div>
    </div>
  );
};

export default ProductDetails;
