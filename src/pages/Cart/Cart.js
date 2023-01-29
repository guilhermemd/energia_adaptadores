import { useContext } from "react";
import Context from "../../context/Context";

import "./Cart.css";

const Cart = () => {
  const { cart, deleteProductCart } = useContext(Context);

  console.log("carrinho", cart);
  return (
    <div className="cart">
      <div className="cart__wrapper">
        <div>
          {cart.map((item) => (
            <div className="cart__product">
              <div className="cart__product__info">
                <div className="cart__product__name">{item.name}</div>
                <div className="cart__product__quantity">Quantidade: 1000</div>
                <div className="cart__product__value">Valor: R$8000</div>
              </div>
              <button
                onClick={() => deleteProductCart(item.id)}
                className="cart__product__delte"
              >
                Remover produto
              </button>
            </div>
          ))}
        </div>
        <div className="cart__order">Email Area</div>
      </div>
    </div>
  );
};

export default Cart;
