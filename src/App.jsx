import { useContext } from "react";
import Cart from "./components/Cart/Cart";
import Hero from "./components/Hero/Hero";
import Header from "./components/Layout/Header";
import Products from "./components/Products/Products";
import { MyContext } from "./Context/MyContext";

function App() {

  const {cartIsShow} = useContext(MyContext)
  
  return (
    <>
      {cartIsShow && <Cart />}
      <Header />
      <Hero />
      <Products />
    </>
  );
}

export default App;
