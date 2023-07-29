import { useContext} from "react";
import ProductItem from "./ProductItem";
import "./Products.css";
import { MyContext } from "../../Context/MyContext";
import SearchBar from "./SearchBar";
// import { AiOutlineSearch } from "react-icons/Ai";
import Button from "../UI/Button";

const Products = () => {
  const {
    data,
    searchIsShow,
    setSearchIsShow,
    filteredList,
    filtredListOpen,
    setFiltredListOpen,
  } = useContext(MyContext);

  
  const searchBarOpenHandler = () => {
    setSearchIsShow(true);
    setFiltredListOpen(false);
  };

  const productList = data.map((product) => (
    <ProductItem key={product.id} product={product} />
  ));

  const newFiltredList = filteredList.map((product) => (
    <ProductItem key={product.id} product={product} />
  ));

  return (
    <main className="products-wrapper">
      {searchIsShow ? (
        <SearchBar />
      ) : (
        <Button className="ürün-arama" onClick={searchBarOpenHandler}>
          Ara
        </Button>
      )}
      {filtredListOpen ? (
        <ul className="products">{productList}</ul>
      ) : (
        <ul className="products">{newFiltredList}</ul>
      )}
    </main>
  );
};

export default Products;
