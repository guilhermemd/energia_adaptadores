import { useParams } from "react-router-dom";
// import { useState } from "react";

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

const { products } = data;
const ProductDetails = () => {
  const params = useParams();
  const product = products.find(({ id }) => params.id);

  return (
    <div className="productDetails">
      <div className="productDetails__wrapper">
        <div className="productDetails__carousel">
          <img src={slides[product.id]} alt={product.id} />
        </div>
        <div>
          <div>{product.name}</div>
          <div>{product.price}</div>
          <button>Adicionar ao carrinho</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
