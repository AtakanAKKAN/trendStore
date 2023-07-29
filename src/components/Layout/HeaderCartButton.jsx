import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import "./Header.css";
import { MyContext } from "../../Context/MyContext";

const HeaderCartButton = () => {
  const { showCartHandler, selectItem } = useContext(MyContext);

  const totalItemsInCart = selectItem.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.amount;
  }, 0);

  return (
    <button className="button" onClick={showCartHandler}>
      <span className="icon">
        <CartIcon />
      </span>
      <span>sepetim</span>
      <span className="badge">{totalItemsInCart.toString()}</span>
    </button>
  );
};

export default HeaderCartButton;
