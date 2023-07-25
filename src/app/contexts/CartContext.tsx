'use client'
import React, { createContext, useState, useContext } from "react";

interface Item {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartContextProps {
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  cartItems: Item[];
  addToCart: (item: Item) => void;
  removeFromCart: (itemId: number) => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<Item[]>([]);

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };
  const increaseQuantity = (id) => {
    setCartItems(prevItems =>
      prevItems.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item)
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );
  };


  const addToCart = (item: Item) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(i => i.id === item.id);
      if (existingItem) {
        // Increase the quantity of the existing item
        return prevItems.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      } else {
        console.log(item)
        // Add the new item
        return [...prevItems, item];
      }
      
    });
    openCart();
}

  const removeFromCart = (itemId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };
  const clearCart = () => {
    setCartItems([]);
  };
  return (
    <CartContext.Provider value={{ isCartOpen, openCart, closeCart, cartItems, addToCart, removeFromCart, increaseQuantity,
        decreaseQuantity,clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
