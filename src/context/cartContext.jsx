import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setcart] = useState([]);

  const loadCart = useCallback(async () => {
    try {
      const res = await fetch('http://localhost:3000/cart');
      const json = await res.json();
      setcart(json);
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const addItemToCart = useCallback(async cartItem => {
    try {
      const res = await fetch(
        'http://localhost:3000/cart',
        {
          method: 'POST',
          body: JSON.stringify(cartItem),
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        },
      );
      const json = await res.json();
      setcart(value => [...value, json]);
    } catch (error) {}
  }, []);

  const updateCartItem = useCallback(async cartItem => {
    try {
      const res = await fetch(
        `http://localhost:3000/cart/${cartItem.id}`,
        {
          method: 'PUT',
          body: JSON.stringify(cartItem),
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        },
      );
      const json = await res.json();
      setcart(value => {
        const index = value.findIndex(
          x => x.id === json.id,
        );
        return [
          ...value.slice(0, index),
          json,
          ...value.slice(index + 1),
        ];
      });
    } catch (error) {}
  }, []);

  const deleteCartItem = useCallback(async cartItem => {
    try {
      await fetch(
        `http://localhost:3000/cart/${cartItem.id}`,
        {
          method: 'DELETE',
        },
      );
      setcart(value => {
        const index = value.findIndex(
          x => x.id === cartItem.id,
        );
        return [
          ...value.slice(0, index),
          ...value.slice(index + 1),
        ];
      });
    } catch (error) {}
  }, []);

  useEffect(() => {
    loadCart();
  }, [loadCart]);

  const value = useMemo(
    () => ({
      cart,
      addItemToCart,
      updateCartItem,
      deleteCartItem,
    }),
    [cart],
  );

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}
