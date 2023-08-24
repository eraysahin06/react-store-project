import React, { createContext } from 'react';
import { PRODUCTS } from '../products';

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < PRODUCTS.length; i++) {
      cart[i] = 0;
    }
    return cart;
  };

  const [cartItems, setCartItems] = useState({});
  return <ShopContext.Provider>{props.children}</ShopContext.Provider>;
};

export default ShopContextProvider;
