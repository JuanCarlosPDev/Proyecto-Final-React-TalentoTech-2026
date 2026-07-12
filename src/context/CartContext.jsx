/*=============== React, useState, useContext, createContext ===============*/
import React, { useState, useContext, createContext } from "react";

/*=============== Contexto ===============*/
export const CartContext = createContext();

/*=============== Hook personalizada ===============*/
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe ser usado dentro de un CartProvider!!!");
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // FUNCIÓN 1: Busca si el producto ya está en el carrito
  // Si está → suma la cantidad
  // Si no está → lo agrega como nuevo
  const addToCart = (product, quantity) => {
    const itemInCart = cart.find((item) => item.id === product.id);
    if (itemInCart) {
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item,
      );
      setCart(updatedCart);
    } else {
      setCart((prevCart) => [...prevCart, { ...product, quantity }]);
    }
  };

  // FUNCIÓN 2: obteniene la cantidad de un item específico
  const getItemQuantity = (productId) => {
    const item = cart.find((item) => item.id === productId);
    return item ? item.quantity : 0;
  };

  // FUNCIÓN 2: vacía el carrito
  const clearCart = () => {
    setCart([]);
  };

  // FUNCIÓN 3: recorre el carrito y suma todas las cantidades
  const getCartQuantity = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  // FUNCIÓN 4: calcula el precio total de todos los productos en el carrito.
  const getCartTotal = () => {
    return cart.reduce((acc, item) => acc + item.precio * item.quantity, 0);
  };

  // FUNCIÓN 5: elimina un producto del carrito
  const removeItem = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  // FUNCIÓN 6: verifica si un producto ya está en el carrito
  const isInCart = (productId) => {
    return cart.some((item) => item.id === productId);
  };

  // FUNCIÓN 7: aumentar la cantidad de un producto en el carrito
  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.id === id && item.quantity < item.stock) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      }),
    );
  };

  // FUNCIÓN 8: disminuye la cantidad de un producto en el carrito
  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.id === id && item.quantity > 1) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return item;
      }),
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        getItemQuantity,
        clearCart,
        getCartQuantity,
        getCartTotal,
        removeItem,
        isInCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
