import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

export const ProductsContext = createContext();

export function ProductsProvider({ children }) {
  const [products, setproducts] = useState([]);

  const loadProducts = useCallback(async () => {
    try {
      const res = await fetch(
        'http://localhost:3000/products',
      );
      const json = await res.json();
      setproducts(json);
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  const value = useMemo(
    () => ({
      products,
    }),
    [products],
  );

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}
