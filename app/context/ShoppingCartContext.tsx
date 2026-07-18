"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type CartItem = {
  id: number;
  quantity: number;
};

type ShoppingCartContextType = {
  cartItems: CartItem[];
  addToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  clearCart: () => void;
  cartQuantity: number;

  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
};

const ShoppingCartContext = createContext<ShoppingCartContextType | null>(null);

export function useShoppingCart() {
  const context = useContext(ShoppingCartContext);

  if (!context) {
    throw new Error("useShoppingCart must be used inside ShoppingCartProvider");
  }

  return context;
}

export function ShoppingCartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  function addToCart(id: number) {
    setCartItems((current) => {
      const existing = current.find((item) => item.id === id);

      if (!existing) {
        return [...current, { id, quantity: 1 }];
      }

      return current.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      );
    });
  }

      function openCart() {
      setIsOpen(true);
    }

    function closeCart() {
      setIsOpen(false);
    }

  function increaseQuantity(id: number) {
    addToCart(id);
  }

  function decreaseQuantity(id: number) {
    setCartItems((current) =>
      current
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }

  function removeFromCart(id: number) {
    setCartItems((current) => current.filter((item) => item.id !== id));
  }

  function clearCart() {
    setCartItems([]);
  }

  const cartQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  return (
<ShoppingCartContext.Provider
  value={{
    cartItems,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    cartQuantity,

    isOpen,
    openCart,
    closeCart,
  }}
>
      {children}
    </ShoppingCartContext.Provider>
  );
}
