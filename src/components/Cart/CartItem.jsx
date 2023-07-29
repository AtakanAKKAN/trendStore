/* eslint-disable react/prop-types */
import { useContext } from "react";
import "./CartItem.css";
import { MyContext } from "../../Context/MyContext";

const CartItem = ({ product }) => {
  const { setSelectItem, selectItem } = useContext(MyContext);

  const handleDelete = (id) => {
    setSelectItem(selectItem.filter((item) => item.id !== id));
  };

  const { name, img, price, amount } = product;

  return (
    <li className="cart-item">
      <div className="cart-item-img">
        <img src={img} alt={name} />
      </div>
      <div className="cart-item-info">
        <div className="cart-item-texts">
          <b>{name}</b>
          <div>
            <span>₺{price} x</span>
            <span className="cart-item-amount">{amount}</span>
          </div>
        </div>
        <button
          href="/"
          className="cart-item-remove"
          onClick={() => handleDelete(product.id)}
        >
          x
        </button>
      </div>
    </li>
  );
};

export default CartItem;
