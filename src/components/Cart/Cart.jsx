/* eslint-disable react/prop-types */
import CartItem from "./CartItem";
import "./Cart.css";
import { useContext } from "react";
import { MyContext } from "../../Context/MyContext";
import Offcanvas from "../UI/Offcanvas";

const Cart = () => {
  const { hideCartHandler, selectItem, clearCard} = useContext(MyContext);

  const cartItems = (
    <ul className="cart-items">
      {selectItem.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
    </ul>
  );

  const total = selectItem.reduce((acc, item) => acc + item.price*item.amount , 0)

  return (
    <Offcanvas>
      <div className="content">
        <div className="cart-head">
          <h2>Sepetim</h2>
          <a href="/" className="cart-close" onClick={hideCartHandler}>
            X
          </a>
        </div>
        {cartItems}
        <div className="total">
          <span>Toplam Değer</span>
          <span>{total}₺</span>
        </div>
        <div className="actions">
          <button className="cart-order">Sipariş Ver</button>
          <button className="cart-clear" onClick={clearCard}>Temizle</button>
        </div>
      </div>
    </Offcanvas>
  );
};

export default Cart;
