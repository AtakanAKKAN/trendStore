/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useState } from "react";
import products from "../productData";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const data = products;

  const [cartIsShow, setCartIsShow] = useState(false);
  const [searchIsShow, setSearchIsShow] = useState(false)

  const [selectItem, setSelectItem] = useState([]);

 
  const [filteredList, setFilteredList] = new useState(data);

  const filterBySearch = (event) => {
    const query = event.target.value.toLowerCase();
    const updatedList = data.filter((item) => {
      return item.name.toLowerCase().indexOf(query) !== -1;
    });
    setFilteredList(updatedList);
  };

  const addItem = (item) => {
    const existingCartItemIndex = selectItem.findIndex((cartItem) => cartItem.id === item.id);

    if (existingCartItemIndex !== -1) {
      // Eğer ürün zaten sepet içinde varsa, miktarını güncelle
      const updatedSelectItem = [...selectItem];
      updatedSelectItem[existingCartItemIndex].amount += 1;
      setSelectItem(updatedSelectItem);
    } else {
      // Eğer ürün sepet içinde yoksa, sepete ekle
      setSelectItem((prevSelectItem) => [...prevSelectItem, item]);
    }
  };
  const hideCartHandler = (e) => {
    e.preventDefault();
    setCartIsShow(false);
  };

  const [filtredListOpen, setFiltredListOpen] = useState(false);

  const filterListProductsOpen = () => {
    setFiltredListOpen(true);
  };


  const value = {
    data,
    cartIsShow,
    setCartIsShow,
    showCartHandler: () => {setCartIsShow(!cartIsShow);},
    hideCartHandler,
    addItem,
    selectItem,
    setSelectItem,
    clearCard: () => {setSelectItem([]);},
    searchIsShow, 
    setSearchIsShow,
    filteredList, 
    setFilteredList,
    filterBySearch,
    filtredListOpen, 
    setFiltredListOpen,
    filterListProductsOpen,
  };

  return <MyContext.Provider value={value}> {children} </MyContext.Provider>;
};
