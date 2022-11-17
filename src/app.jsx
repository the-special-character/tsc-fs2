import React, { useCallback, useContext } from 'react';
import { CartContext } from './context/cartContext';
import { ProductsContext } from './context/productsContext';
import Header from './header';

function App() {
  const { products } = useContext(ProductsContext);
  const {
    cart,
    addItemToCart,
    updateCartItem,
    deleteCartItem,
  } = useContext(CartContext);

  return (
    <div>
      <Header />
      {products.map(product => {
        const cartItem = cart.find(
          x => x.productId === product.id,
        );
        return (
          <div className="grid w-full grid-cols-1 items-start gap-y-8 gap-x-6 sm:grid-cols-12 lg:gap-x-8">
            <div className="aspect-w-2 aspect-h-3 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
              <img
                src={product.image}
                alt={product.title}
                className="object-cover object-center"
              />
            </div>
            <div className="sm:col-span-8 lg:col-span-7">
              <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
                {product.title}
              </h2>

              <section
                aria-labelledby="information-heading"
                className="mt-2"
              >
                <h3 id="information-heading">
                  {product.description}
                </h3>

                <p className="text-2xl text-gray-900">
                  {Intl.NumberFormat(
                    product['currency-locale'],
                    {
                      currency: product.currency,
                      style: 'currency',
                    },
                  ).format(product.price)}
                </p>

                <h4 id="information-heading">
                  {product.category}
                </h4>

                {/* Reviews */}
                <div className="mt-6">
                  <h4 className="sr-only">Reviews</h4>
                  <div className="flex items-center">
                    <p className="sr-only">
                      {product.rating.rate} out of 5 stars
                    </p>
                    <a
                      href="#id"
                      className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      {product.rating.count} reviews
                    </a>
                  </div>
                </div>
              </section>

              <section
                aria-labelledby="options-heading"
                className="mt-10"
              >
                <h3
                  id="options-heading"
                  className="sr-only"
                >
                  Product options
                </h3>

                {cartItem ? (
                  <div className="flex items-center mt-6 ">
                    <button
                      type="button"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      onClick={() =>
                        updateCartItem({
                          ...cartItem,
                          quantity: cartItem.quantity + 1,
                        })
                      }
                    >
                      +
                    </button>
                    <p className="font-bold text-4xl px-10">
                      {cartItem.quantity}
                    </p>
                    <button
                      type="button"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      onClick={() => {
                        if (cartItem.quantity > 1) {
                          updateCartItem({
                            ...cartItem,
                            quantity: cartItem.quantity - 1,
                          });
                        } else {
                          deleteCartItem(cartItem);
                        }
                      }}
                    >
                      -
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={() =>
                      addItemToCart({
                        productId: product.id,
                        quantity: 1,
                      })
                    }
                  >
                    Add to bag
                  </button>
                )}
              </section>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
